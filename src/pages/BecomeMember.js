// src/pages/BecomeAMember.js
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  CardActions,
} from '@mui/material';

const BecomeAMember = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Original Content */}
        <Typography variant="h4" gutterBottom align="center">
          Exclusive Member Benefits
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ mb: 4 }}
          align="center"
        >
          Unlock premium features, access more tenders, and boost your business opportunities.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Unlimited Tender Access</Typography>
                <Typography variant="body2" color="textSecondary">
                  Gain full access to all tenders in our database.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Priority Support</Typography>
                <Typography variant="body2" color="textSecondary">
                  Get expert support for tender queries and submissions.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6">Premium Tools</Typography>
                <Typography variant="body2" color="textSecondary">
                  Access templates, training, and bidding tools.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* New Subscription Plans */}
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{ mt: 6 }}
        >
          Choose Your Subscription
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ mb: 4 }}
        >
          Select a plan that fits your needs and start enjoying premium benefits today.
        </Typography>
        <Grid container spacing={4}>
          {/* Monthly Subscription */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Monthly Subscription
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 'bold', mb: 3 }}
                >
                  $10 / Month
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ Unlimited tender access
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ Priority support
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ Premium tools and templates
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  Subscribe Now
                </Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Yearly Subscription */}
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ fontWeight: 'bold', mb: 2 }}
                >
                  Yearly Subscription
                </Typography>
                <Typography
                  variant="h6"
                  color="primary"
                  sx={{ fontWeight: 'bold', mb: 3 }}
                >
                  $100 / Year
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ All monthly benefits
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ Save $20 annually
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>
                  ✔ Exclusive yearly offers
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  size="large"
                  sx={{
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  Subscribe Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BecomeAMember;
