import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
} from '@mui/material';
import { styled } from '@mui/system';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import img from '../img/marketing-pillar-page-marketing-overview_0.png';
import { Dashboard } from '@mui/icons-material';

// Theme colors
const themeColor = {
  primary: '#444',
  primaryDark: '#666',
  success: '#4caf50',
  error: '#f44336',
  headerBg: '#444',
  headerTextColor: '#ffffff',
  borderColor: '#777',
  color: '#000000',
  rowHoverColor: '#f5f5f5',
  scrollbarThumbColor: '#888',
};

// Background styling for the login page
const Background = styled(Box)(({ theme }) => ({
  minHeight: '80vh',
  background: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  marginTop: '-100px',
}));

// Styling for the content box (left side)
const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '12px',
  background: '#ffffff',
  height: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

// Keyframes for continuous shake animation
const shakeAnimation = '@keyframes shake { 0% { transform: translateX(0); } 25% { transform: translateX(-5px); } 50% { transform: translateX(5px); } 75% { transform: translateX(-5px); } 100% { transform: translateX(0); } }';

// Styling for the paper containing the login form (right side)
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.0)',
  background: '#fafafa',
  animation: 'fadeIn 1s ease-in-out',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

// Styling for the login title
const TitleTypography = styled(Typography)(({ theme }) => ({
  color: '#000000',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
}));

// Styling for text fields
const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: themeColor.borderColor,
    },
    '&:hover fieldset': {
      borderColor: themeColor.primary,
    },
    '&.Mui-focused fieldset': {
      borderColor: themeColor.primaryDark,
    },
  },
  '& .MuiInputAdornment-root': {
    color: themeColor.primaryDark,
  },
}));

// Styling for buttons
const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  fontWeight: 'bold',
  textTransform: 'none',
  transition: 'background-color 0.3s ease',
  '&:hover': {
    backgroundColor: themeColor.primaryDark,
  },
  '&:active': {
    transform: 'scale(0.98)',
  },
  padding: theme.spacing(1.5),
  marginTop: theme.spacing(2),
}));

const DashboardPage = () => {
  
  return (
    <Background>
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {/* Left box with content and images */}
      <Grid item xs={12} md={12}>
        <ContentBox>
          <img
            src={img}
            alt="Company Logo"
            style={{ 
              marginBottom: 20, 
              maxWidth: '40%',
              animation: 'shake 1s infinite'
            }}
          />
          <Typography variant="h4" gutterBottom>
            Welcome to the Admin Portal
          </Typography>
       
        </ContentBox>
      </Grid>
    </Grid>
  </Background>

  );
};

export default DashboardPage;