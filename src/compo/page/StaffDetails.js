import React, { useState, useEffect } from 'react';
import { Container, Card, CardContent, TextField, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Avatar, Paper, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, Divider } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import APIConnection from '../../config'; // Your API URL config
import Swal from 'sweetalert2'; // Import SweetAlert2
import axios from 'axios'; // Import Axios

// Example staff data (you can fetch this from an API)

const StaffDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [staffData, setStaffData] = useState([]);
  const [open, setOpen] = useState(false); // To control dialog visibility
  const [selectedStaff, setSelectedStaff] = useState(null); // Store selected staff

  const fetchstaffapi = APIConnection.fetchstaffapi;
  const validatestaffapi = APIConnection.validatestaffapi;

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
  const handleValidate = async (selectedStaff) => {
    let portalId;

    // Set portalId based on the designation
    if (selectedStaff.designation === "PM") {
      portalId = 3;
    } else if (selectedStaff.designation === "Marketing") {
      portalId = 2;
    } else {
      portalId = 1; // Default portalId
    }

    const validatedata = {
      staffId: selectedStaff.id,
      portalId,
      roleId: 2
    };

    try {
      setOpen(false);
      // Confirmation dialog
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You are about to register this staff member.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, register it!'
      });

      // Proceed only if 'Confirm' is clicked
      if (result.isConfirmed) {
        const response = await axios.post(validatestaffapi, validatedata, { withCredentials: true });

        if (response.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'Staff Registered',
            text: 'Staff registered successfully!',
            confirmButtonText: 'OK',
          });
        }
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response?.data?.message || 'Failed to register staff.', // Handling undefined error response
        confirmButtonText: 'OK',
      });
    }

    setOpen(false); // Close dialog after validation
  };


  const fetchstaffdetails = async () => {
    try {
      const response = await axios.get(fetchstaffapi, { withCredentials: true });

      if (response.status === 200) {
        setStaffData(response.data);
      }

    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: error.response.data.message,
        confirmButtonText: 'OK',
      });
    }
  }

  useEffect(() => {
    fetchstaffdetails();
  }, [])

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
                    <Typography variant="subtitle2" sx={{ color: '#ffffff' }}>Designation</Typography>
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
                    <TableCell>{staff.designation}</TableCell>
                    <TableCell>
                      <Avatar alt={staff.name} src={`${APIConnection.mainlink}${staff.photo}`} />
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
                  {/* Display Staff Photo */}
                  <Box textAlign="center" mb={3}>
                    <Avatar
                      src={`${APIConnection.mainlink}${selectedStaff.photo}`}
                      sx={{ width: 120, height: 120, margin: '0 auto', boxShadow: 3 }}
                    >
                      {/* Default Icon if no photo */}
                      {selectedStaff.photo ? null : <PersonIcon sx={{ fontSize: 80 }} />}
                    </Avatar>
                  </Box>

                  <Divider sx={{ mb: 2 }} />

                  <Typography variant="body1"><strong>Employee ID:</strong> {selectedStaff.emp_id}</Typography>
                  <Typography variant="body1"><strong>Name:</strong> {selectedStaff.name}</Typography>
                  <Typography variant="body1"><strong>Email:</strong> {selectedStaff.email}</Typography>
                  <Typography variant="body1"><strong>Mobile Number:</strong> {selectedStaff.mobileno}</Typography>
                  <Typography variant="body1"><strong>Designation:</strong> {selectedStaff.designation}</Typography>
                  {/* Add more details as needed */}
                </>
              )}
            </DialogContent>
            <DialogActions>
              {/* Show Validate button only if is_account_created is false */}
              {selectedStaff && !selectedStaff.is_account_created && (
                <Button onClick={() => { handleValidate(selectedStaff) }} color="primary" variant="contained">Validate</Button>
              )}
              <Button onClick={handleClose} color="secondary" variant="outlined">Close</Button>
            </DialogActions>
          </Dialog>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StaffDetails;
