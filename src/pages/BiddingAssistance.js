// src/pages/BiddingAssistance.js
import React from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';

const BiddingAssistance = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Get Expert Bidding Assistance
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Need help crafting a winning bid? Share your details and our experts will guide you.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">Submit Your Query</Typography>
            <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2 }} />
            <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
            <TextField
              fullWidth
              label="Tender Details"
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button variant="contained" color="primary">
              Get Assistance
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BiddingAssistance;
