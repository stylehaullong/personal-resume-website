'use client'

import React, { useState } from 'react';
import { 
  Typography, 
  Paper, 
  Grid, 
  TextField, 
  Button, 
  Snackbar,
  Alert,
  Box
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const AboutPage = () => {
  const { control, handleSubmit, reset } = useForm<FormData>();
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' as 'success' | 'error' });

  const onSubmit = async (data: FormData) => {
    try {
      // Here you would typically send the email using an API
      console.log('Sending email:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSnackbar({ open: true, message: 'Email sent successfully!', severity: 'success' });
      reset();
    } catch (error) {
      setSnackbar({ open: true, message: 'Failed to send email. Please try again.', severity: 'error' });
    }
  };

  const handleBookInterview = () => {
    // Here you would typically integrate with a scheduling service
    window.open('https://calendly.com/nguyenlong500', '_blank');
  };

  return (
    <Paper elevation={3} className="p-6 m-4">
      <Typography variant="h4" component="h1" gutterBottom>
        About Me
      </Typography>
      
      <Typography variant="body1" paragraph>
        {/* Add your experience summary here */}
        I am a senior data engineer with over 10 years of experience in designing and implementing
        data-driven solutions. My expertise includes big data technologies, cloud platforms, and
        machine learning operations. I have successfully led teams in developing scalable data
        pipelines and analytics systems for Fortune 500 companies.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Contact Me
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: 'Name is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Name"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: 'Message is required' }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  label="Message"
                  fullWidth
                  margin="normal"
                  multiline
                  rows={4}
                  error={!!error}
                  helperText={error?.message}
                />
              )}
            />
            <Button 
              type="submit" 
              variant="contained" 
              color="primary" 
              startIcon={<EmailIcon />}
              className="mt-4"
            >
              Send Email
            </Button>
          </form>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom>
            Book an Interview
          </Typography>
          <Box className="mt-4">
            <Button 
              variant="contained" 
              color="secondary" 
              startIcon={<EventIcon />}
              onClick={handleBookInterview}
            >
              Schedule Interview
            </Button>
          </Box>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default AboutPage;