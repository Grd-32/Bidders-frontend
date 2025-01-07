// src/pages/SupplierPreQualification.js
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import {
  Business,
  AccountTree,
  Public,
  Place,
  Phone,
  Category,
  LocationOn,
  Email,
  Web,
  Lock,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const companyTypes = ['Sole Proprietorship', 'Limited Company', 'Partnership'];
const africanCountries = [
  'Kenya',
  'Uganda',
  'Tanzania',
  'Nigeria',
  'South Africa',
  'Egypt',
  'Ethiopia',
  'Ghana',
  'Rwanda',
  'Botswana',
];
const tenderCategories = [
  'Construction',
  'ICT Services',
  'Medical Supplies',
  'Consultancy',
  'Transportation',
  'Agriculture',
];

const SupplierPreQualification = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    country: '',
    location: '',
    phoneNumber: '',
    categoriesOfInterest: '',
    supplyLocations: '',
    emailAddress: '',
    websiteOrSocialMedia: '',
    pin: '',
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms of service and privacy policy.');
      return;
    }
    alert('Form submitted successfully!');
    // Submit form data to the backend here
  };

  return (
    <Box sx={{ py: 6, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Supplier Pre-Qualification
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
          Submit your business details for pre-qualification and get eligible for upcoming tenders.
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Why Pre-Qualify?
            </Typography>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
              Pre-qualification ensures your business meets the necessary requirements for tender participation.
            </Typography>
            <Card>
              <CardContent>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  📑 Submit Documents
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  🛠 Industry Expertise
                </Typography>
                <Typography variant="body1">✔ Eligibility Assurance</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Fill in Your Details
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Company Name *"
                variant="outlined"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Business sx={{ color: '#1976d2' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                select
                label="Company Type *"
                variant="outlined"
                name="companyType"
                value={formData.companyType}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountTree sx={{ color: '#4caf50' }} />
                    </InputAdornment>
                  ),
                }}
                required
              >
                {companyTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                select
                label="Country *"
                variant="outlined"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Public sx={{ color: '#f44336' }} />
                    </InputAdornment>
                  ),
                }}
                required
              >
                {africanCountries.map((country) => (
                  <MenuItem key={country} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Location *"
                variant="outlined"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Place sx={{ color: '#ff9800' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                label="Phone Number *"
                variant="outlined"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone sx={{ color: '#9c27b0' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                select
                label="Categories of Interest"
                variant="outlined"
                name="categoriesOfInterest"
                value={formData.categoriesOfInterest}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Category sx={{ color: '#009688' }} />
                    </InputAdornment>
                  ),
                }}
              >
                {tenderCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                label="Supply Locations"
                variant="outlined"
                name="supplyLocations"
                value={formData.supplyLocations}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOn sx={{ color: '#3f51b5' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Email Address *"
                variant="outlined"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: '#e91e63' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <TextField
                fullWidth
                label="Website or Social Media Link"
                variant="outlined"
                name="websiteOrSocialMedia"
                value={formData.websiteOrSocialMedia}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Web sx={{ color: '#673ab7' }} />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="PIN *"
                variant="outlined"
                name="pin"
                value={formData.pin}
                onChange={handleInputChange}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: '#ff5722' }} />
                    </InputAdornment>
                  ),
                }}
                required
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleCheckboxChange}
                  />
                }
                label={
                  <Typography variant="body2">
                    I agree to the{' '}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer">
                      terms of service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" target="_blank" rel="noopener noreferrer">
                      privacy policy
                    </Link>
                    .
                  </Typography>
                }
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Submit for Pre-Qualification
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SupplierPreQualification;
