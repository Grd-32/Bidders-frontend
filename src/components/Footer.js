// src/components/Footer.js
import React from 'react';
import { Box, Grid, Typography, Link, TextField, Button, Container } from '@mui/material';
import { Email, Phone, Twitter, Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#002B5B', color: '#FFFFFF', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          {/* Logo and Description */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              BiddersPortal
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Let us be your guide on the journey to tender success. Bidders Portal™ provides the tools and insights you need to secure winning bids.
            </Typography>
          </Grid>

          {/* Menu */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Menu
            </Typography>
            <Link href="/" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Home
            </Link>
            <Link href="/about" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              About
            </Link>
            <Link href="/services" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Services
            </Link>
            <Link href="/tenders" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Tenders
            </Link>
            <Link href="/contact" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Contact
            </Link>
          </Grid>

          {/* Important Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Important Links
            </Typography>
            <Link href="/tender-information" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Tender Information
            </Link>
            <Link href="/supplier-prequalification" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Supplier Pre-Qualification
            </Link>
            <Link href="/bidding-assistance" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Bidding Assistance
            </Link>
            <Link href="/refund-policy" color="inherit" underline="none" sx={{ display: 'block', mb: 1 }}>
              Refund Policy
            </Link>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Email sx={{ mr: 1 }} />
              info@biddersportal.com
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Phone sx={{ mr: 1 }} />
              +254 787 175 632
            </Typography>
          </Grid>
        </Grid>

        {/* Newsletter and Social Media */}
        <Grid container spacing={4} sx={{ mt: 4, alignItems: 'center' }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Subscribe for Latest News and Resources
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                placeholder="Email address"
                variant="outlined"
                size="small"
                sx={{ backgroundColor: '#FFFFFF', borderRadius: 1, flex: 1 }}
              />
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ ml: 2, backgroundColor: '#007BFF' }}
              >
                GO
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Social Media
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://twitter.com" target="_blank" color="inherit">
                <Twitter fontSize="large" />
              </Link>
              <Link href="https://facebook.com" target="_blank" color="inherit">
                <Facebook fontSize="large" />
              </Link>
              <Link href="https://instagram.com" target="_blank" color="inherit">
                <Instagram fontSize="large" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" color="inherit">
                <LinkedIn fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Footer Note */}
        <Typography variant="body2" align="center" sx={{ mt: 4, borderTop: '1px solid #FFFFFF', pt: 2 }}>
          Copyright © 2024 All rights reserved by BiddersPortal | Developed by DanF
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
