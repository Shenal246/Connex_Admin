import React, { useState } from 'react';
import { TextField, Button, MenuItem, Select, InputLabel, FormControl, Container, Grid, Typography, Box, Card, CardContent, CardHeader, Divider, Avatar } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'; // Import Axios
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SaveIcon from '@mui/icons-material/Save';
import APIConnection from '../../config'; // Your API URL config
import Swal from 'sweetalert2'; // Import SweetAlert2

const StaffRegistration = () => {
  const addstaffapi = APIConnection.addstaffapi;

  // State for storing the name of the uploaded image
  const [photoName, setPhotoName] = useState(null);

  const formik = useFormik({
    initialValues: {
      emp_id: '',
      name: '',
      email: '',
      mobileno: '',
      designation: '',
      country_id: '',
      department_id: '',
      gender_id: '',
      photo: null,
    },
    validationSchema: Yup.object({
      emp_id: Yup.string().required('Employee ID is required'),
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      mobileno: Yup.string().matches(/^\d+$/, 'Mobile number must be digits').required('Mobile number is required'),
      designation: Yup.string().required('Designation is required'),
      country_id: Yup.string().required('Country is required'),
      department_id: Yup.string().required('Department is required'),
      gender_id: Yup.string().required('Gender is required'),
      photo: Yup.mixed().required('A photo is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      formData.append('emp_id', values.emp_id);
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('mobileno', values.mobileno);
      formData.append('designation', values.designation);
      formData.append('country_id', values.country_id);
      formData.append('department_id', values.department_id);
      formData.append('gender_id', values.gender_id);
      formData.append('photo', values.photo); // File upload

      try {
        const response = await axios.post(addstaffapi, formData, {withCredentials:true},
          {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        Swal.fire({
          icon: 'success',
          title: 'Staff Registered',
          text: 'Staff registered successfully!',
          confirmButtonText: 'OK',
        });

        resetForm();
        setPhotoName(null); // Clear the photo name after successful submission
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: error.response.data.message,
          confirmButtonText: 'OK',
        });
      }
    },
  });

  // Function to handle photo selection and set the file name
  const handlePhotoChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue('photo', file);

    // Set the file name
    if (file) {
      setPhotoName(file.name);
    } else {
      setPhotoName(null); // Clear the file name if no file is selected
    }
  };

  return (
    <Container maxWidth="md" sx={{ mb: 5 }}>
      {/* Card Wrapper for a Premium Look */}
      <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: 'primary.main' }} aria-label="staff">
              S
            </Avatar>
          }
          title={
            <Typography variant="h5" component="div" gutterBottom>
              Staff Registration
            </Typography>
          }
          subheader="Please fill the form to register a new staff member."
        />
        <Divider />
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3}>
              {/* Employee ID */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="emp_id"
                  name="emp_id"
                  label="Employee ID"
                  variant="outlined"
                  value={formik.values.emp_id}
                  onChange={formik.handleChange}
                  error={formik.touched.emp_id && Boolean(formik.errors.emp_id)}
                  helperText={formik.touched.emp_id && formik.errors.emp_id}
                />
              </Grid>

              {/* Name */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="Name"
                  variant="outlined"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              {/* Email */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              {/* Mobile Number */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="mobileno"
                  name="mobileno"
                  label="Mobile Number"
                  variant="outlined"
                  value={formik.values.mobileno}
                  onChange={formik.handleChange}
                  error={formik.touched.mobileno && Boolean(formik.errors.mobileno)}
                  helperText={formik.touched.mobileno && formik.errors.mobileno}
                />
              </Grid>

              {/* Designation */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Designation</InputLabel>
                  <Select
                    id="designation"
                    name="designation"
                    value={formik.values.designation}
                    onChange={formik.handleChange}
                    label="Designation"
                    error={formik.touched.designation && Boolean(formik.errors.designation)}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">Junior Developer</MenuItem>
                    <MenuItem value="2">Senior Developer</MenuItem>
                    <MenuItem value="3">Project Manager</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Country ID */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Country</InputLabel>
                  <Select
                    id="country_id"
                    name="country_id"
                    value={formik.values.country_id}
                    onChange={formik.handleChange}
                    label="Country"
                    error={formik.touched.country_id && Boolean(formik.errors.country_id)}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">USA</MenuItem>
                    <MenuItem value="2">India</MenuItem>
                    <MenuItem value="3">Germany</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Department ID */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Department</InputLabel>
                  <Select
                    id="department_id"
                    name="department_id"
                    value={formik.values.department_id}
                    onChange={formik.handleChange}
                    label="Department"
                    error={formik.touched.department_id && Boolean(formik.errors.department_id)}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">Development</MenuItem>
                    <MenuItem value="2">Marketing</MenuItem>
                    <MenuItem value="3">HR</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Gender */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Gender</InputLabel>
                  <Select
                    id="gender_id"
                    name="gender_id"
                    value={formik.values.gender_id}
                    onChange={formik.handleChange}
                    label="Gender"
                    error={formik.touched.gender_id && Boolean(formik.errors.gender_id)}
                  >
                    <MenuItem value=""><em>None</em></MenuItem>
                    <MenuItem value="1">Male</MenuItem>
                    <MenuItem value="2">Female</MenuItem>
                    <MenuItem value="3">Other</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Photo Upload */}
              <Grid item xs={12} sm={6}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<CloudUploadIcon />}
                  component="label"
                  sx={{ height: '100%' }}
                >
                  Upload Photo
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    id="photo"
                    name="photo"
                    onChange={handlePhotoChange} // Handle file change
                  />
                </Button>
                {formik.touched.photo && formik.errors.photo ? (
                  <div style={{ color: 'red' }}>{formik.errors.photo}</div>
                ) : null}

                {/* Display photo name if available */}
                {photoName && (
                  <Box mt={2}>
                    <Typography variant="body2" gutterBottom>Uploaded Photo: {photoName}</Typography>
                  </Box>
                )}
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box textAlign="center" sx={{ mt: 3 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    startIcon={<SaveIcon />}
                    sx={{ paddingX: 5, paddingY: 1.5, fontSize: '1rem', borderRadius: 2 }}
                  >
                    Register Staff
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StaffRegistration;
