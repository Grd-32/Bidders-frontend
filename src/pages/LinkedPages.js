import React from 'react';
import { Typography, Box, Container, Button } from '@mui/material';

// Template for a Page Component
const PageTemplate = ({ title, description, buttonText, buttonLink }) => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#f9f9f9',
        minHeight: '90vh',
      }}
    >
      <Container>
        <Typography variant="h4" gutterBottom textAlign="center">
          {title}
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          sx={{ mb: 4, maxWidth: 600, margin: '0 auto' }}
        >
          {description}
        </Typography>
        <Box textAlign="center">
          <Button
            variant="contained"
            color="primary"
            href={buttonLink}
            sx={{ fontSize: '1.2rem', padding: '10px 20px' }}
          >
            {buttonText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

// Individual Pages
export const TenderNotification = () => (
  <PageTemplate
    title="Tender Notifications"
    description="Stay updated with the latest tender opportunities tailored to your business needs. Sign up for personalized notifications today."
    buttonText="Subscribe Now"
    buttonLink="/subscribe"
  />
);

export const SupplierPreQualification = () => (
  <PageTemplate
    title="Supplier Pre-Qualification"
    description="Get pre-qualified to ensure your business meets the requirements for tenders in your industry. Start the process now."
    buttonText="Get Pre-Qualified"
    buttonLink="/pre-qualification"
  />
);

export const TenderInformation = () => (
  <PageTemplate
    title="Tender Information"
    description="Access comprehensive information on tenders, including eligibility, requirements, and deadlines."
    buttonText="View Tenders"
    buttonLink="/tender-information"
  />
);

export const BiddingAssistance = () => (
  <PageTemplate
    title="Bidding Assistance"
    description="Enhance your chances of winning tenders with expert bidding support and guidance tailored to your industry."
    buttonText="Get Assistance"
    buttonLink="/bidding-assistance"
  />
);

export const BecomeAMember = () => (
  <PageTemplate
    title="Become a Member"
    description="Unlock exclusive benefits and access premium tender opportunities by becoming a member today."
    buttonText="Join Now"
    buttonLink="/membership"
  />
);

// Export all pages together for routing
export default {
  TenderNotification,
  SupplierPreQualification,
  TenderInformation,
  BiddingAssistance,
  BecomeAMember,
};
