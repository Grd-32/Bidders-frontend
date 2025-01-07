import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Divider,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
} from '@mui/material';
import { fetchTenders, initiateMpesaPayment } from '../services/api';

const TenderNotification = () => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [preferredCountry, setPreferredCountry] = useState('');
  const [charge, setCharge] = useState(0);
  const [notificationMethod, setNotificationMethod] = useState('email');
  const [contactDetails, setContactDetails] = useState({
    email: '',
    sms: '',
    inApp: '',
  });

  useEffect(() => {
    const fetchNotificationData = async () => {
      try {
        const { data } = await fetchTenders();
        const uniqueCategories = [
          ...new Set(data.map((tender) => tender.Tender_Category)),
        ];
        const uniqueCountries = [
          ...new Set(data.map((tender) => tender.Country)),
        ];
        setCategories(uniqueCategories);
        setCountries(uniqueCountries);
      } catch (error) {
        console.error('Error fetching tenders:', error);
      }
    };

    fetchNotificationData();
  }, []);

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];

    setSelectedCategories(updatedCategories);

    const baseCharge = 300;
    const extraChargePerCategory = 100;
    const additionalCategories =
      updatedCategories.length > 2 ? updatedCategories.length - 2 : 0;
    setCharge(baseCharge + additionalCategories * extraChargePerCategory);
  };

  const handleContactDetailChange = (field, value) => {
    setContactDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const selectedContactDetail =
      notificationMethod === 'email'
        ? contactDetails.email
        : notificationMethod === 'sms'
        ? contactDetails.sms
        : contactDetails.inApp;

    if (!selectedContactDetail.trim()) {
      alert('Please enter your contact details for the selected notification method.');
      return;
    }

    try {
      const payload = {
        amount: charge,
        notificationMethod,
        selectedCategories,
        preferredCountry,
        contactDetail: selectedContactDetail,
      };
      const response = await initiateMpesaPayment(payload);
      alert('Payment successful! Preferences saved.');
    } catch (error) {
      console.error('Error initiating payment:', error);
      alert('Failed to save preferences. Please try again.');
    }
  };

  return (
    <Box
      sx={{
        width: '50%',
        margin: '0 auto',
        padding: 3,
        border: '1px solid #ddd',
        borderRadius: 2,
        boxShadow: 2,
        backgroundColor: '#f9f9f9',
      }}
    >
      <Typography variant="h5" gutterBottom>
        Tender Notification Preferences
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* Category Selection */}
      <Typography variant="body1" gutterBottom>
        Select Categories (Extra charge for more than 2)
      </Typography>
      {categories.map((category) => (
        <FormControlLabel
          key={category}
          control={
            <Checkbox
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
          }
          label={category}
        />
      ))}

      {/* Country Selection */}
      <TextField
        label="Preferred Country"
        select
        variant="outlined"
        size="small"
        fullWidth
        value={preferredCountry}
        onChange={(e) => setPreferredCountry(e.target.value)}
        sx={{ mt: 3, mb: 3 }}
      >
        <MenuItem value="">All Countries</MenuItem>
        {countries.map((country) => (
          <MenuItem key={country} value={country}>
            {country}
          </MenuItem>
        ))}
      </TextField>

      {/* Notification Method */}
      <FormControl component="fieldset" sx={{ mb: 3 }}>
        <FormLabel component="legend">Notification Method</FormLabel>
        <RadioGroup
          row
          value={notificationMethod}
          onChange={(e) => setNotificationMethod(e.target.value)}
        >
          <FormControlLabel value="email" control={<Radio />} label="Email" />
          <FormControlLabel value="sms" control={<Radio />} label="SMS" />
          <FormControlLabel
            value="in-app"
            control={<Radio />}
            label="In-App Notification"
          />
        </RadioGroup>
      </FormControl>

      {/* Conditional Contact Detail Input */}
      {notificationMethod === 'email' && (
        <TextField
          label="Email Address"
          type="email"
          variant="outlined"
          fullWidth
          value={contactDetails.email}
          onChange={(e) =>
            handleContactDetailChange('email', e.target.value)
          }
          sx={{ mb: 3 }}
        />
      )}
      {notificationMethod === 'sms' && (
        <TextField
          label="Phone Number"
          type="tel"
          variant="outlined"
          fullWidth
          value={contactDetails.sms}
          onChange={(e) =>
            handleContactDetailChange('sms', e.target.value)
          }
          sx={{ mb: 3 }}
        />
      )}
      {notificationMethod === 'in-app' && (
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={contactDetails.inApp}
          onChange={(e) =>
            handleContactDetailChange('inApp', e.target.value)
          }
          sx={{ mb: 3 }}
        />
      )}

      {/* Charge Display */}
      <Typography variant="body1" color="error" gutterBottom>
        Total Charge: Ksh {charge}
      </Typography>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Save Preferences
      </Button>
    </Box>
  );
};

export default TenderNotification;
