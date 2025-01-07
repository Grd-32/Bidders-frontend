// src/pages/ContactPage.js
import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from '@mui/material';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const ContactPage = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyA4oKZlc3qRS_nP2O9qSjz7_mzHjCsh6ys', // Replace with your API key
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: -1.324975, // Replace with your latitude
    lng: 36.856946, // Replace with your longitude
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      {/* Google Map */}
      <Box sx={{ mb: 4 }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <Typography>Loading map...</Typography>
        )}
      </Box>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: 'left' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
              Get in Touch with Bidders Portal
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              We value your feedback and are here to assist you. Feel free to
              reach out to us using the contact information provided below.
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Call Anytime
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              +254787175632
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Send Email
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              info@biddersportal.com
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
              Visit Office
            </Typography>
            <Typography variant="body1">
              Nar Narayan, Community Rd, Nairobi, Kenya
            </Typography>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 4,
              boxShadow: 3,
              borderRadius: 2,
              backgroundColor: '#ffffff',
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}
            >
              Send Us a Message
            </Typography>
            <form>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email Address"
                type="email"
                variant="outlined"
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                sx={{ mb: 2 }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Send Message
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
