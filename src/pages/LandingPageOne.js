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
      <Typography variant="h6" gutterBottom>
        WELCOME TO BIDDERS PORTAL TM
      </Typography>
      <Typography 
      variant="h1" 
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
        Access Tenders Globally
      </Typography>
      <Typography variant="h2" gutterBottom>
        Empowering businesses to grow worldwide
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
        Seamless Application Process
      </Typography>
      <Typography variant="h2" gutterBottom>
        Apply for tenders effortlessly
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
          TenderHub simplifies tender access by aggregating tenders from various sources
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
                  Seamless Application
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Apply for tenders directly from our platform with minimal effort.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box textAlign="center">
                <PublicIcon fontSize="large" color="primary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Global Opportunities
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access procurement opportunities from around the world.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          How It Works
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent textAlign="center">
                <AccountCircleIcon fontSize="large" color="secondary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Step 1: Create an Account
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Sign up to get started with TenderHub.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent textAlign="center">
                <ExploreIcon fontSize="large" color="secondary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Step 2: Browse Tenders
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Explore tenders from multiple categories.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent textAlign="center">
                <EmojiEventsIcon fontSize="large" color="secondary" />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Step 3: Apply & Win
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Submit applications and seize opportunities.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box
        sx={{
          py: 6,
          backgroundImage: 'url(/images/tender-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Join TenderHub today and find your next big opportunity.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{ fontSize: '1.2rem', padding: '10px 20px' }}
        >
          Sign Up Now
        </Button>
      </Box>

      {/* Pricing Section */}
      <Box id="pricing" sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center">
            Membership Pricing
          </Typography>
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent textAlign="center">
                  <Typography variant="h6" gutterBottom>
                    Basic Plan
                  </Typography>
                  <Typography variant="h4" color="primary">
                    Free
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Access limited tenders and basic features.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardContent textAlign="center">
                  <Typography variant="h6" gutterBottom>
                    Pro Plan
                  </Typography>
                  <Typography variant="h4" color="primary">
                    $50/mo
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Unlimited tenders, priority support, and advanced features.
                  </Typography>
                </CardContent>
              </Card>
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
              "TenderHub made it so easy to find and apply for tenders. Highly recommend!"
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
