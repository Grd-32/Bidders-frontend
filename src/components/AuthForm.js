import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  Divider,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { Google } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is used

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null); // Success or error message
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [dialogOpen, setDialogOpen] = useState(false); // Control dialog visibility
  const navigate = useNavigate();

  const handleGoogleLoginSuccess = (response) => {
    fetch('http://localhost:5000/api/auth/google-login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ googleId: response.credential, email: response.email }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          setDialogOpen(true);
          setTimeout(() => {
            navigate('/home'); // Redirect to home page
          }, 2000);
        } else {
          setMessage(data.message || 'Google Login Failed.');
          setMessageType('error');
        }
      })
      .catch(() => {
        setMessage('Google Login Failed.');
        setMessageType('error');
      });
  };

  const handleGoogleLoginError = () => {
    setMessage('Google Login Failed.');
    setMessageType('error');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLogin && password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setMessageType('error');
      return;
    }

    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    fetch(`https://bidders-portal.onrender.com${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          if (isLogin) {
            setDialogOpen(true); // Show dialog on successful login
            setTimeout(() => {
              navigate('/'); // Redirect to home page
            }, 2000);
          } else {
            setMessage('Registration Successful! Please login.');
            setMessageType('success');
            setIsLogin(true); // Toggle to login view
          }
        } else {
          setMessage(data.message || `${isLogin ? 'Login' : 'Registration'} Failed.`);
          setMessageType('error');
        }
      })
      .catch(() => {
        setMessage('Something went wrong. Please try again.');
        setMessageType('error');
      });
  };

  return (
    <GoogleOAuthProvider clientId="812471316326-9s598hne257bkdb9qc6ebh6brt0055vg.apps.googleusercontent.com">
      <Container maxWidth="xs">
        <Box
          sx={{
            mt: 6,
            p: 4,
            boxShadow: 3,
            borderRadius: 2,
            textAlign: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
            {isLogin ? 'Login to Your Account' : 'Create an Account'}
          </Typography>

          {message && (
            <Alert severity={messageType} sx={{ mb: 2 }}>
              {message}
            </Alert>
          )}

          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
            />
            {/* Password Input */}
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            {/* Confirm Password for Registration */}
            {!isLogin && (
              <TextField
                label="Confirm Password"
                type="password"
                variant="outlined"
                fullWidth
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                sx={{ mb: 2 }}
              />
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ py: 1.5, mb: 2 }}
            >
              {isLogin ? 'Login' : 'Register'}
            </Button>
          </form>

          <Divider sx={{ my: 2 }}>OR</Divider>

          {/* Google Login */}
          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
            render={(renderProps) => (
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  py: 1.5,
                  mb: 2,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 1,
                  borderColor: '#4285F4',
                  color: '#4285F4',
                }}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Google fontSize="small" />
                Continue with Google
              </Button>
            )}
          />

          {/* Toggle Login/Register */}
          <Typography variant="body2" sx={{ mt: 2 }}>
            {isLogin ? 'Don’t have an account?' : 'Already have an account?'}{' '}
            <Button
              variant="text"
              color="primary"
              onClick={() => {
                setIsLogin(!isLogin);
                setMessage(null); // Clear messages when toggling
              }}
            >
              {isLogin ? 'Register' : 'Login'}
            </Button>
          </Typography>
        </Box>

        {/* Success Dialog */}
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Success</DialogTitle>
          <DialogContent>
            <Typography>
              {isLogin ? 'Login successful!' : 'Registration successful!'}
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setDialogOpen(false);
                navigate('/'); // Redirect to home page
              }}
              color="primary"
            >
              Proceed
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </GoogleOAuthProvider>
  );
};

export default AuthForm;
