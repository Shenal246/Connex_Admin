import React, { useState, useEffect } from 'react';
import {
    Container, Card, CardContent, TextField, Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Typography, Paper, Box, Dialog, DialogTitle, DialogContent, DialogActions,
    Button, Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import APIConnection from '../../config'; // Your API URL config
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios'; // Import Axios

const PartnerLogs = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [fromDate, setFromDate] = useState(''); // State to hold the start date filter
    const [partnerUserId, setPartnerUserId] = useState(''); // State to hold the partner user ID filter
    const [logData, setLogData] = useState([]);
    const [open, setOpen] = useState(false); // To control dialog visibility
    const [selectedLog, setSelectedLog] = useState(null); // Store selected log

    const fetchpartnerLogsApi = APIConnection.fetchpartnerLogsApi;

    // Fetch partner logs data
    const fetchLogDetails = async () => {
        try {
            const response = await axios.get(fetchpartnerLogsApi, { withCredentials: true });
            if (response.status === 200) {
                setLogData(response.data);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error fetching logs',
                text: error.response?.data?.message || 'Failed to fetch logs.',
                confirmButtonText: 'OK',
            });
        }
    };

    useEffect(() => {
        fetchLogDetails();
    }, []);

    // Handle search/filter logic
    const filteredLogs = logData.filter((log) => {
        const actionMatch = log.action.toLowerCase().includes(searchTerm.toLowerCase());
        const timestampMatch = log.timestamp.includes(searchTerm.toLowerCase());
        const partnerIdMatch = log.partnerName.toLowerCase().includes(partnerUserId.toLowerCase());
        const fromDateMatch = fromDate ? new Date(log.timestamp) >= new Date(fromDate) : true;

        return (actionMatch || timestampMatch) && partnerIdMatch && fromDateMatch;
    });

    // Open Dialog and set the selected log
    const handleRowClick = (log) => {
        setSelectedLog(log); // Set the clicked log as selected
        setOpen(true); // Open the dialog
    };

    // Close Dialog
    const handleClose = () => {
        setOpen(false); // Close the dialog
        setSelectedLog(null); // Clear selected log
    };

    return (
        <Container maxWidth="lg" sx={{ mb: 5 }}>
            <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
                <CardContent>
                    {/* Title */}
                    <Typography variant="h5" component="div" gutterBottom>
                        Partner Logs
                    </Typography>

                    {/* Search Bar */}
                    <Box display="flex" alignItems="center" my={3} gap={2}>
                        <Box display="flex" alignItems="center">
                            <SearchIcon sx={{ mr: 1 }} />
                            <TextField
                                fullWidth
                                variant="outlined"
                                placeholder="Search by Action or Timestamp"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                sx={{ borderRadius: 2 }}
                            />
                        </Box>

                        {/* From Date Filter */}
                        <TextField
                            type="date"
                            variant="outlined"
                            label="From Date"
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            InputLabelProps={{ shrink: true }}
                        />

                        {/* Partner User ID Filter */}
                        <TextField
                            type="text"
                            variant="outlined"
                            label="Partner Member"
                            value={partnerUserId}
                            onChange={(e) => setPartnerUserId(e.target.value)}
                        />
                    </Box>

                    {/* Partner Logs List Table */}
                    <TableContainer component={Paper} sx={{ maxHeight: 400, overflowY: 'auto' }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    {/* Apply background color to TableCell */}
                                    <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                                        <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>#</Typography>
                                    </TableCell>
                                    <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                                        <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Timestamp</Typography>
                                    </TableCell>
                                    <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                                        <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Action</Typography>
                                    </TableCell>
                                    <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                                        <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Partner Name</Typography>
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredLogs.map((log, index) => (
                                    <TableRow key={log.logid} onClick={() => handleRowClick(log)} sx={{
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.04)', cursor: 'pointer' },
                                    }}>
                                        <TableCell>{index + 1}</TableCell>
                                        <TableCell>{new Date(log.timestamp).toLocaleString()}</TableCell>
                                        <TableCell>{log.action}</TableCell>
                                        <TableCell>{log.partnerName}</TableCell>
                                    </TableRow>
                                ))}
                                {/* Show no results message if no logs are found */}
                                {filteredLogs.length === 0 && (
                                    <TableRow>
                                        <TableCell colSpan={5}>
                                            <Typography align="center" color="textSecondary">
                                                No results found.
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Dialog for Log Details */}
                    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                        <DialogTitle>Log Details</DialogTitle>
                        <DialogContent dividers>
                            {selectedLog && (
                                <>
                                    <Typography variant="body1"><strong>Timestamp:</strong> {new Date(selectedLog.timestamp).toLocaleString()}</Typography>
                                    <Typography variant="body1"><strong>Action:</strong> {selectedLog.action}</Typography>
                                    <Typography variant="body1"><strong>Partner Member:</strong> {selectedLog.partnerName}</Typography>
                                </>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="secondary" variant="outlined">Close</Button>
                        </DialogActions>
                    </Dialog>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PartnerLogs;
