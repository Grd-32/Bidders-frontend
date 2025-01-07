import React, { useState, useContext } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { loginUser } from '../services/api';
import AuthContext from '../context/authContext.js';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const { data } = await loginUser(formData);
      login(data.user, data.token);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error.response.data.message);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={formData.password}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
      />
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default LoginPage;
