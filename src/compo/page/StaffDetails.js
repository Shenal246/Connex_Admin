import React, { useState } from 'react';
import { Container, Card, CardContent, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Avatar, Paper, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Example staff data (you can fetch this from an API)
const initialStaffData = [
  { emp_id: '1', name: 'John Doe', email: 'john@example.com', mobileno: '1234567890', department: 'Development', photo: null },
  { emp_id: '2', name: 'Jane Smith', email: 'jane@example.com', mobileno: '0987654321', department: 'Marketing', photo: null },
  { emp_id: '3', name: 'Mark Johnson', email: 'mark@example.com', mobileno: '1234598765', department: 'HR', photo: null },
  // Add more staff records as needed
];

const StaffDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffData] = useState(initialStaffData);
  const [open, setOpen] = useState(false); // To control dialog visibility
  const [selectedStaff, setSelectedStaff] = useState(null); // Store selected staff

  // Function to handle search/filter logic
  const filteredStaff = staffData.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      staff.mobileno.includes(searchTerm) ||
      staff.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Open Dialog and set the selected staff
  const handleRowClick = (staff) => {
    setSelectedStaff(staff); // Set the clicked staff as selected
    setOpen(true); // Open the dialog
  };

  // Close Dialog
  const handleClose = () => {
    setOpen(false); // Close the dialog
    setSelectedStaff(null); // Clear selected staff
  };

  // Handle "Validate" button logic (add your own logic here)
  const handleValidate = () => {
    console.log("Staff validated:", selectedStaff);
    setOpen(false); // Close dialog after validation
  };

  return (
    <Container maxWidth="lg" sx={{ mb: 5 }}>
      {/* Card Wrapper for Premium Look */}
      <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
        <CardContent>
          {/* Title */}
          <Typography variant="h5" component="div" gutterBottom>
            Staff List
          </Typography>

          {/* Search Bar */}
          <Box display="flex" alignItems="center" my={3}>
            <SearchIcon sx={{ mr: 1 }} />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by Name, Email, Mobile Number, or Department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ borderRadius: 2 }}
            />
          </Box>

          {/* Staff List Table */}
          <TableContainer component={Paper} sx={{ maxHeight: 400, overflowY: 'auto' }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {/* Apply background color to TableCell */}
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>#</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Employee ID</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Name</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Email</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Mobile Number</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Department</Typography>
                  </TableCell>
                  <TableCell sx={{ backgroundColor: '#444444', color: '#ffffff', fontSize: '0.875rem' }}>
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Photo</Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStaff.map((staff, index) => (
                  <TableRow key={staff.emp_id} onClick={() => handleRowClick(staff)} sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.04)',
                      cursor: 'pointer',
                    },
                  }}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{staff.emp_id}</TableCell>
                    <TableCell>{staff.name}</TableCell>
                    <TableCell>{staff.email}</TableCell>
                    <TableCell>{staff.mobileno}</TableCell>
                    <TableCell>{staff.department}</TableCell>
                    <TableCell>
                      <Avatar alt={staff.name} src={staff.photo} />
                    </TableCell>
                  </TableRow>
                ))}
                {/* Show no results message if no staff is found */}
                {filteredStaff.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={7}>
                      <Typography align="center" color="textSecondary">
                        No results found.
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Dialog for Staff Details */}
          <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
            <DialogTitle>Staff Details</DialogTitle>
            <DialogContent dividers>
              {selectedStaff && (
                <>
                  <Typography variant="body1"><strong>Employee ID:</strong> {selectedStaff.emp_id}</Typography>
                  <Typography variant="body1"><strong>Name:</strong> {selectedStaff.name}</Typography>
                  <Typography variant="body1"><strong>Email:</strong> {selectedStaff.email}</Typography>
                  <Typography variant="body1"><strong>Mobile Number:</strong> {selectedStaff.mobileno}</Typography>
                  <Typography variant="body1"><strong>Department:</strong> {selectedStaff.department}</Typography>
                  {/* Add more details as needed */}
                </>
              )}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleValidate} color="primary" variant="contained">Validate</Button>
              <Button onClick={handleClose} color="secondary" variant="outlined">Close</Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StaffDetails;
