import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  MenuItem,
  Checkbox,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
} from '@mui/material';
import { fetchTenders, initiateMpesaPayment } from '../services/api';

const TenderNotification = () => {
  const [categories, setCategories] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [charge, setCharge] = useState(0);
  const [notificationMethod, setNotificationMethod] = useState('email');
  const [subscriptionType, setSubscriptionType] = useState('monthly');
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

  const updateCharge = (categoriesCount, countriesCount) => {
    const baseCharge = subscriptionType === 'monthly' ? 300 : 3000;
    const extraCategoryCharge = Math.max(0, categoriesCount - 1) * (subscriptionType === 'monthly' ? 100 : 1000);
    const extraCountryCharge = Math.max(0, countriesCount - 1) * (subscriptionType === 'monthly' ? 200 : 2000);
    setCharge(baseCharge + extraCategoryCharge + extraCountryCharge);
  };

  const handleSelectAll = (type) => {
    if (type === 'categories') {
      const allSelected = selectedCategories.length === categories.length;
      setSelectedCategories(allSelected ? [] : categories);
      updateCharge(allSelected ? 0 : categories.length, selectedCountries.length);
    } else if (type === 'countries') {
      const allSelected = selectedCountries.length === countries.length;
      setSelectedCountries(allSelected ? [] : countries);
      updateCharge(selectedCategories.length, allSelected ? 0 : countries.length);
    }
  };

  const handleCategoryChange = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedCategories);
    updateCharge(updatedCategories.length, selectedCountries.length);
  };

  const handleCountryChange = (country) => {
    const updatedCountries = selectedCountries.includes(country)
      ? selectedCountries.filter((c) => c !== country)
      : [...selectedCountries, country];
    setSelectedCountries(updatedCountries);
    updateCharge(selectedCategories.length, updatedCountries.length);
  };

  const handleContactDetailChange = (field, value) => {
    setContactDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubscriptionChange = (value) => {
    setSubscriptionType(value);
    updateCharge(selectedCategories.length, selectedCountries.length);
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
        userId: 'USER_ID_HERE', // Replace with the actual user ID if available
        notificationMethod,
        subscriptionType,
        selectedCategories,
        selectedCountries,
        contactDetail: selectedContactDetail,
        charge,
      };
  
      const response = await fetch('http://localhost:5000/api/notifications/preferences', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const data = await response.json();
        alert('Preferences saved and payment initiated. Follow payment link.');
        window.location.href = data.data.link; // Redirect to payment link
      } else {
        const error = await response.json();
        alert(`Error: ${error.message || 'Failed to save preferences.'}`);
      }
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

      {/* Subscription Type */}
      <Typography variant="body1" gutterBottom>
        Subscription Type
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <Select
          value={subscriptionType}
          onChange={(e) => handleSubscriptionChange(e.target.value)}
        >
          <MenuItem value="monthly">Monthly</MenuItem>
          <MenuItem value="yearly">Yearly</MenuItem>
        </Select>
      </FormControl>

      {/* Category Selection */}
      <Typography variant="body1" gutterBottom>
        Select Categories (Extra charge for more than 1 category)
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <MenuItem>
          <Checkbox
            checked={selectedCategories.length === categories.length}
            onChange={() => handleSelectAll('categories')}
          />
          Select All Categories
        </MenuItem>
        <Select
          multiple
          value={selectedCategories}
          renderValue={(selected) => selected.join(', ')}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              <Checkbox
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category} (+ {subscriptionType === 'monthly' ? 'Ksh 100' : 'Ksh 1000'})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Country Selection */}
      <Typography variant="body1" gutterBottom>
        Select Countries (Extra charge for more than 1 country)
      </Typography>
      <FormControl fullWidth sx={{ mb: 3 }}>
        <MenuItem>
          <Checkbox
            checked={selectedCountries.length === countries.length}
            onChange={() => handleSelectAll('countries')}
          />
          Select All Countries
        </MenuItem>
        <Select
          multiple
          value={selectedCountries}
          renderValue={(selected) => selected.join(', ')}
        >
          {countries.map((country) => (
            <MenuItem key={country} value={country}>
              <Checkbox
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryChange(country)}
              />
              {country} (+ {subscriptionType === 'monthly' ? 'Ksh 200' : 'Ksh 2000'})
            </MenuItem>
          ))}
        </Select>
      </FormControl>

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
          onChange={(e) => handleContactDetailChange('email', e.target.value)}
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
          onChange={(e) => handleContactDetailChange('sms', e.target.value)}
          sx={{ mb: 3 }}
        />
      )}
      {notificationMethod === 'in-app' && (
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          value={contactDetails.inApp}
          onChange={(e) => handleContactDetailChange('inApp', e.target.value)}
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
