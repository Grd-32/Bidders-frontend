import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Container,
  Card,
  CardContent,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PublicIcon from '@mui/icons-material/Public';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExploreIcon from '@mui/icons-material/Explore';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import Header from '../components/MainHeader';

const LandingPage = () => {
  return (
    <Box>
 
<Box>
  <Carousel navButtonsAlwaysVisible indicators={true}>
    {/* Slide 1 */}
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/images/bidders1.png)', // Replace with your first image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        WELCOME TO BIDDERS PORTAL TM
      </Typography>
      <Typography 
      variant="h2" 
      sx={{ fontWeight: 'bold' }}
      gutterBottom
      >
        Your guide to winning tenders in Africa
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, fontSize: '1.2rem', padding: '10px 20px' }}
        component={Link}
        to="/tender-information"
      >
        View all tenders
      </Button>
    </Box>

    {/* Slide 2 */}
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/images/bidders2.png)', // Replace with your second image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Access Tenders in Africa
      </Typography>
      <Typography variant="h2" gutterBottom>
        Empowering businesses to grow in Africa
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, fontSize: '1.2rem', padding: '10px 20px' }}
        component={Link}
        to="/tender-information"
      >
        View all tenders
      </Button>
    </Box>

    {/* Slide 3 */}
    <Box
      sx={{
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundImage: 'url(/images/bidders3.png)', // Replace with your third image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Seamless Acqisition of tender information
      </Typography>
      <Typography variant="h2" gutterBottom>
        Get tender information effortlessly
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, fontSize: '1.2rem', padding: '10px 20px' }}
        component={Link}
        to="/tender-information"
      >
        View all tenders
      </Button>
    </Box>
  </Carousel>
</Box>

      {/* About Section */}
      <Container id="about" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          About Us
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Bidders Portal simplifies tender access by aggregating tenders from various sources
          and offering a seamless application experience. Our mission is to
          empower businesses to grow by connecting them with procurement
          opportunities globally.
        </Typography>
      </Container>

      {/* Services Section */}
      <Box id="services" sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Our Services
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center">
                <SearchIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Search Tenders
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Easily search and filter tenders based on categories, countries, and methods.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center">
                <AssignmentTurnedInIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Seamless Bidding
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Get tender information directly from our platform with minimal effort.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center">
                <PublicIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Opportunities all over Africa
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access procurement opportunities from around the continent.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Featured Stats Section */}
<Box sx={{ backgroundColor: '#f1f1f1', py: 6 }}>
  <Container>
    <Grid container spacing={4} alignItems="center">
      {/* Left Content */}
      <Grid item xs={12} md={6}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#1E3A8A' }}
        >
          Stay Ahead of the Competition in Africa's Tendering Game
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          We are committed to providing you with up-to-date and accurate tender information every day.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: '1rem', padding: '10px 20px' }}
          component={Link}
          to="/tender-information"
        >
          Learn More
        </Button>
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={6}>
            <Box
              textAlign="center"
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                py: 3,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#1E3A8A',
                  fontSize: 40,
                  mb: 1,
                }}
              >
                analytics
              </Typography>
              <Typography variant="h5" sx={{ color: '#1E3A8A', fontWeight: 'bold' }}>
                349,800+
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Tender Bids
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              textAlign="center"
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                py: 3,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#1E3A8A',
                  fontSize: 40,
                  mb: 1,
                }}
              >
                people
              </Typography>
              <Typography variant="h5" sx={{ color: '#1E3A8A', fontWeight: 'bold' }}>
                3,000+
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Satisfied Customers
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              textAlign="center"
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                py: 3,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#1E3A8A',
                  fontSize: 40,
                  mb: 1,
                }}
              >
                new_releases
              </Typography>
              <Typography variant="h5" sx={{ color: '#1E3A8A', fontWeight: 'bold' }}>
                100+
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                New Tenders Daily
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              textAlign="center"
              sx={{
                backgroundColor: '#fff',
                border: '1px solid #ddd',
                borderRadius: '8px',
                py: 3,
                px: 2,
              }}
            >
              <Typography
                sx={{
                  color: '#1E3A8A',
                  fontSize: 40,
                  mb: 1,
                }}
              >
                verified
              </Typography>
              <Typography variant="h5" sx={{ color: '#1E3A8A', fontWeight: 'bold' }}>
                3,500+
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Trusted Clients
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      

      {/* Right Content - Large Image */}
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <img
            src="/images/tender-bg2.jpeg" // Replace with actual image path
            alt="Showcasing Tenders"
            style={{
              width: '100%',
              maxWidth: '400px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Container>
</Box>


      {/* Client Reviews Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          What Our Clients Say
        </Typography>
        <Carousel indicators={false} navButtonsAlwaysVisible>
          <Box textAlign="center" p={4}>
            <Typography variant="body1" gutterBottom>
              "Bidders Portal made it so easy to find and apply for tenders. Highly recommend!"
            </Typography>
            <Typography variant="body2">- John Doe</Typography>
          </Box>
          <Box textAlign="center" p={4}>
            <Typography variant="body1" gutterBottom>
              "Amazing platform with seamless user experience."
            </Typography>
            <Typography variant="body2">- Jane Smith</Typography>
          </Box>
        </Carousel>
      </Container>

      {/* Contact Section */}
      <Container id="contact" sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Contact Us
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
          Have questions or need support? Reach out to us!
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Your Name"
              fullWidth
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              label="Your Email"
              fullWidth
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <TextField
              label="Message"
              fullWidth
              multiline
              rows={4}
              variant="outlined"
              sx={{ mb: 3 }}
            />
            <Button variant="contained" color="primary" fullWidth>
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingPage;
