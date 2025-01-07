import React, { useContext, useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import AuthContext from '../context/authContext.js';
import { updateUser } from '../services/api';

const ProfilePage = () => {
  const { user, setUser } = useContext(AuthContext);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleUpdate = async () => {
    try {
      const { data } = await updateUser(formData);
      setUser(data.user);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <Box padding={3}>
      <Typography variant="h4" gutterBottom>
        My Profile
      </Typography>
      <TextField
        label="Name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <Button variant="contained" color="primary" onClick={handleUpdate}>
        Update Profile
      </Button>
    </Box>
  );
};

export default ProfilePage;
