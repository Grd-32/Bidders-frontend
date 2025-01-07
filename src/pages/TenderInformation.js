// src/pages/TenderInformation.js
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const TenderInformation = () => {
  const infoSections = [
    { title: 'What is a Tender?', description: 'A formal offer to supply goods or services at a specified price.' },
    { title: 'Tender Types', description: 'Open, Selective, and Negotiated tenders based on procurement policies.' },
    { title: 'Submission Tips', description: 'Ensure all documents are complete and adhere to the given deadline.' },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: '#e9ecef' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Comprehensive Tender Information
        </Typography>
        <Grid container spacing={4}>
          {infoSections.map((section, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {section.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {section.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TenderInformation;
