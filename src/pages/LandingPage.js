import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Box,
  Grid,
  TextField,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  CircularProgress,
  CircularProgressLabel,
  
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PublicIcon from '@mui/icons-material/Public';
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import { Fade } from 'react-awesome-reveal';
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const LandingPage = () => {
  const [expanded, setExpanded] = useState(false);

  // State for dynamic counters
  const [stats, setStats] = useState({
    tenders: 0,
    customers: 0,
    dailyTenders: 0,
    trustedClients: 0,
  });

  // Increment the stats over time
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prevStats) => ({
        tenders: Math.min(prevStats.tenders + Math.floor(Math.random() * 1000), 349800),
        customers: Math.min(prevStats.customers + Math.floor(Math.random() * 50), 3000),
        dailyTenders: Math.min(prevStats.dailyTenders + Math.floor(Math.random() * 5), 100),
        trustedClients: Math.min(prevStats.trustedClients + Math.floor(Math.random() * 50), 3500),
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <Fade triggerOnce direction='up'>
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
      </Fade>
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
      <Fade triggerOnce direction='down'>
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
      </Fade>
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
      <Fade triggerOnce direction='up'>
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
      </Fade>
    </Box>
  </Carousel>
</Box>

      {/* About Us Section */}
            <Container sx={{ py: 10 }}>
              <Grid container spacing={6} alignItems="center">
                {/* Image */}
                <Grid item xs={12} md={6}>
                  <Box
                    component="img"
                    src="/images/search-tender.jpeg"
                    alt="About Us"
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: "15px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    }}
                  />
                </Grid>
                {/* Text */}
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                    About Us
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, color: "text.secondary" }}
                  >
                    Bidders Portal TM is a transformative platform designed to empower
                    businesses of all sizes. With our advanced aggregation technology,
                    we simplify access to tender opportunities across Africa and
                    beyond.
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ mb: 3, lineHeight: 1.8, color: "text.secondary" }}
                  >
                    Whether you’re a small startup or a large enterprise, we provide a
                    seamless experience to search, filter, and apply for procurement
                    opportunities. Our mission is to help you achieve your business
                    goals by delivering verified and curated tenders.
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    sx={{ mt: 2 }}
                    href="/learn-more"
                  >
                    Learn More
                  </Button>
                </Grid>
              </Grid>
            </Container>
      
      <Container id="why-choose-us" sx={{ py: 6, backgroundColor: '#f9f9f9' }}>
  <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
    Why Choose Bidders Portal TM?
  </Typography>

  <Grid container spacing={6} alignItems="center">
    {/* First Item: Image Left, Text Right */}
    <Grid item xs={12} md={6}>
      <Box
        sx={{
          width: '100%',
          height: '300px', // Set an explicit height
          backgroundImage: 'url(/images/apply-tenders1.jpeg)', // Ensure this path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      ></Box>
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        Bidders Portal TM is your one-stop platform for accessing tenders across
        Africa. With our cutting-edge technology, we aggregate tenders from a
        wide range of sources, ensuring you never miss a single opportunity.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        Our mission is to empower businesses of all sizes by providing a simple
        and effective way to search, filter, and apply for tenders. We’re here
        to ensure your business gets the opportunities it deserves.
      </Typography>
    </Grid>
  </Grid>

  <Grid container spacing={6} alignItems="center" sx={{ mt: 6 }}>
    {/* Second Item: Text Left, Image Right */}
    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        By using our customizable tender notifications, you can stay ahead of
        your competition. Receive updates tailored to your business’s needs,
        ensuring that every opportunity aligns with your goals.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
        Our intuitive interface makes it easy to navigate tenders by categories,
        regions, and procurement methods, saving you valuable time and effort.
      </Typography>
    </Grid>
    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
      <Box
        sx={{
          width: '100%',
          height: '300px', // Set an explicit height
          backgroundImage: 'url(/images/tender-bg3.jpeg)', // Ensure this path is correct
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
      ></Box>
    </Grid>
  </Grid>
</Container>

{/* Big Call-to-Action Section */}
<Box
  sx={{
    backgroundColor: "#1E3A8A",
    color: "#FFFFFF",
    py: 8,
    textAlign: "center",
    px: 4,
    backgroundImage:
      "linear-gradient(to right, #1E3A8A, #1F5FB6)",
  }}
>
  <Typography
    variant="h3"
    gutterBottom
    sx={{
      fontWeight: "bold",
      color: "#FFFFFF",
    }}
  >
    Ready to Transform Your Tendering Experience?
  </Typography>
  <Typography
    variant="h6"
    sx={{
      mb: 4,
      color: "#FFFFFF",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    Join thousands of businesses across Africa who are leveraging Bidders
    Portal to secure new contracts and grow their enterprises.
  </Typography>
  <Button
    variant="contained"
    color="secondary"
    sx={{
      fontSize: "1.25rem",
      fontWeight: "bold",
      padding: "15px 40px",
      backgroundColor: "orangered",
      color: "#fff",
      borderRadius: "50px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      "&:hover": {
        backgroundColor: "#FFC107",
      },
    }}
    href="/auth" // Replace with your link
  >
    Get Started Now
  </Button>
</Box>


      {/* FAQ
       Section */}
      <Box id="faq" sx={{ backgroundColor: '#f9f9f9', py: 6 }}>
        <Container>
          <Typography variant="h4" gutterBottom textAlign="center" sx={{ mb: 4 }}>
            Frequently Asked Questions (FAQs)
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
            }}
          >
            {/* Left Image Section */}
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                mb: { xs: 4, md: 0 },
              }}
            >
              <img
                src="/images/apply-tenders.jpeg" // Replace with your image path
                alt="FAQ Illustration"
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                }}
              />
            </Box>

            {/* Right FAQ Section */}
            <Box sx={{ flex: 1, pl: { md: 4 } }}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleAccordionChange('panel1')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    What is Bidders Portal TM?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Bidders Portal TM is a platform designed to simplify the process of finding and applying for tenders across Africa. We aggregate tender information from various sources and present it in an easy-to-use interface for businesses of all sizes.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel2'}
                onChange={handleAccordionChange('panel2')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    How do I access tenders on Bidders Portal?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    To access tenders, create an account on our platform, browse through our extensive tender database, and apply filters to find the tenders most relevant to your business needs. Once you find a tender, you can view detailed information and proceed to apply directly through the provided links.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel3'}
                onChange={handleAccordionChange('panel3')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Are all tenders verified?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Yes, we ensure that all tenders listed on our platform are accurate and up-to-date. However, we recommend verifying the details with the respective issuing authorities before submitting your application.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel4'}
                onChange={handleAccordionChange('panel4')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    Is Bidders Portal TM free to use?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Browsing the list of available tenders is free. However, accessing detailed information or applying for tenders may require a subscription. We offer flexible subscription plans to cater to businesses of all sizes.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleAccordionChange('panel5')}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ fontWeight: 'bold' }}>
                    How can I subscribe to tender notifications?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Visit the "Tender Notifications" section on our platform, customize your preferences, select categories and regions of interest, and choose your preferred notification method (email, SMS, or in-app).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: "#f1f1f1", py: 6 }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: "bold", color: "#1E3A8A" }}
            >
              Stay Ahead of the Competition in Africa's Tendering Game
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              We are committed to providing you with up-to-date and accurate tender information every day.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: "1rem", padding: "10px 20px" }}
              component={Link}
              to="/tender-information"
            >
              Learn More
            </Button>
          </Grid>

          {/* Right Content - Stats with Circular Progress Bars */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {/* Each Stat */}
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(stats.tenders / 349800) * 100}
                    size={120}
                    thickness={6}
                    sx={{ color: "#1E3A8A" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontWeight: "bold", color: "#1E3A8A" }}
                  >
                    {stats.tenders.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Tender Bids
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(stats.customers / 3000) * 100}
                    size={120}
                    thickness={6}
                    sx={{ color: "#1E3A8A" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontWeight: "bold", color: "#1E3A8A" }}
                  >
                    {stats.customers.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Satisfied Customers
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(stats.dailyTenders / 100) * 100}
                    size={120}
                    thickness={6}
                    sx={{ color: "#1E3A8A" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontWeight: "bold", color: "#1E3A8A" }}
                  >
                    {stats.dailyTenders.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    New Tenders Daily
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress
                    variant="determinate"
                    value={(stats.trustedClients / 3500) * 100}
                    size={120}
                    thickness={6}
                    sx={{ color: "#1E3A8A" }}
                  />
                  <Typography
                    variant="h5"
                    sx={{ mt: 2, fontWeight: "bold", color: "#1E3A8A" }}
                  >
                    {stats.trustedClients.toLocaleString()}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Trusted Clients
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>


      {/* Client Reviews Section */}
<Container sx={{ py: 6 }}>
  <Typography
    variant="h4"
    gutterBottom
    textAlign="center"
    sx={{
      mb: 4,
      fontWeight: "bold",
      color: "#1E3A8A",
    }}
  >
    What Our Clients Say
  </Typography>

  <Grid container spacing={4}>
    {/* Client 1 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: 4,
          p: 4,
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            borderRadius: "50%",
            overflow: "hidden",
            border: "#1E3A8A",
            mb: 3,
          }}
        >
          <img
            src="/images/eo3.jpeg" // Replace with actual image path
            alt="Client 1"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "500",
            mb: 2,
          }}
        >
          "Bidders Portal revolutionized the way we find and secure tenders.
          Their platform is efficient, user-friendly, and has opened doors to
          countless opportunities for our business."
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1E3A8A",
          }}
        >
          John Doe
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            color: "#1E3A8A",
          }}
        >
          CEO, Global Ventures
        </Typography>
      </Box>
    </Grid>

    {/* Client 2 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: 4,
          p: 4,
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            borderRadius: "50%",
            overflow: "hidden",
            border: "#1E3A8A",
            mb: 3,
          }}
        >
          <img
            src="/images/ceo2.jpeg" // Replace with actual image path
            alt="Client 2"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "500",
            mb: 2,
          }}
        >
          "I never realized how much time I was wasting until I started using
          Bidders Portal. It’s a game-changer, and the notifications keep me
          updated with tenders I can actually win!"
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1E3A8A",
          }}
        >
          Jane Smith
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            color: "#1E3A8A",
          }}
        >
          Managing Director, Smart Solutions
        </Typography>
      </Box>
    </Grid>

    {/* Client 3 */}
    <Grid item xs={12} md={4}>
      <Box
        sx={{
          backdropFilter: "blur(10px)",
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: 4,
          p: 4,
          textAlign: "center",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Box
          sx={{
            width: "100px",
            height: "100px",
            margin: "0 auto",
            borderRadius: "50%",
            overflow: "hidden",
            border: "#1E3A8A",
            mb: 3,
          }}
        >
          <img
            src="/images/ceo1.jpeg" // Replace with actual image path
            alt="Client 3"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          variant="body1"
          sx={{
            color: "black",
            fontWeight: "500",
            mb: 2,
          }}
        >
          "Thanks to Bidders Portal, my team and I have secured tenders we
          wouldn’t have known about otherwise. The curated listings are
          incredible!"
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "#1E3A8A",
          }}
        >
          Michael Johnson
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            color: "#1E3A8A",
          }}
        >
          Procurement Officer, Elite Supplies
        </Typography>
      </Box>
    </Grid>
  </Grid>
</Container>



      <Box>
            {/* Contact Us / Leave a Comment Section */}
            <Container sx={{ py: 10 }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "center", fontWeight: "bold", mb: 6 }}
              >
                Leave a Comment or Contact Us
              </Typography>
              <Grid container spacing={6}>
                {/* Left Column: Form */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      padding: 4,
                      borderRadius: 4,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      background: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      Send Us a Message
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(0, 0, 0, 0.7)", mb: 3 }}
                    >
                      Have questions or feedback? We're here to help! Fill in the form
                      below and we'll get back to you as soon as possible.
                    </Typography>
      
                    {/* Form */}
                    <form>
                      <Box sx={{ mb: 3 }}>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "12px",
                          }}
                        />
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <input
                          type="email"
                          placeholder="Your Email"
                          required
                          style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "12px",
                          }}
                        />
                      </Box>
                      <Box sx={{ mb: 3 }}>
                        <textarea
                          placeholder="Your Message"
                          required
                          rows="4"
                          style={{
                            width: "100%",
                            padding: "12px",
                            borderRadius: "8px",
                            border: "1px solid #ccc",
                            marginBottom: "12px",
                          }}
                        />
                      </Box>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{
                          width: "100%",
                          padding: "12px",
                          fontSize: "1rem",
                          textTransform: "none",
                          borderRadius: "8px",
                        }}
                      >
                        Submit
                      </Button>
                    </form>
                  </Box>
                </Grid>
      
                {/* Right Column: Contact Information */}
                <Grid item xs={12} md={6}>
                  <Box
                    sx={{
                      padding: 4,
                      borderRadius: 4,
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      background: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      Get In Touch
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "rgba(0, 0, 0, 0.7)", mb: 3 }}
                    >
                      Our team is ready to assist you with any inquiries or feedback.
                      Reach out to us through the following contact details:
                    </Typography>
      
                    <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                      <strong>Email:</strong> support@biddersportal.com
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                      <strong>Phone:</strong> +1 234 567 890
                    </Typography>
                    <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                      <strong>Address:</strong> 123 Business Avenue, City, Country
                    </Typography>
      
                    {/* Social Media Icons */}
                    <Box sx={{ display: "flex", justifyContent: "center", gap: 3, mt: 5 }}>
                      <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#1877F2",
                          fontSize: "36px",
                          textDecoration: "none",
                        }}
                      >
                        <Facebook />
                      </a>
                      <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#1DA1F2",
                          fontSize: "36px",
                          textDecoration: "none",
                        }}
                      >
                        <Twitter />
                      </a>
                      <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#0077B5",
                          fontSize: "36px",
                          textDecoration: "none",
                        }}
                      >
                        <LinkedIn />
                      </a>
                      <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#E1306C",
                          fontSize: "36px",
                          textDecoration: "none",
                        }}
                      >
                        <Instagram />
                      </a>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
    </Box>
  );
};

export default LandingPage;
