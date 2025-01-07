import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#0f2d55' }}>
      {/* Top Toolbar for Contact Info */}
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 1 }}
        >
          {/* Contact Info */}
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ mr: 1, color: '#d1d5db' }} />
            <Typography sx={{ mr: 3, color: '#d1d5db' }}>
              danfdev6@gmail.com
            </Typography>
            <PhoneIcon sx={{ mr: 1, color: '#d1d5db' }} />
            <Typography sx={{ color: '#d1d5db' }}>+254797182300</Typography>
          </Box>

          {/* Social Media Icons */}
          <Box>
            <IconButton color="inherit" size="small">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" size="small">
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Box>
      </Container>
      <hr />

      {/* Main Navbar */}
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'white' }}>
            Bidders Portal
          </Box>
        </Typography>

        {/* Navbar Links */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/#about">
            Company
          </Button>
          <Button color="inherit" component={Link} to="/tender-information">
            Tender Information
          </Button>
          <Button color="inherit" component={Link} to="/#contact">
            Contact
          </Button>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Box>

        {/* Login Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#6a5acd',
            color: '#fff',
            ml: 2,
            '&:hover': { backgroundColor: '#5a4dcf' },
          }}
          component={Link}
          to="/login"
        >
          Log In
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
