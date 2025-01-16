import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Container,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import SearchIcon from "@mui/icons-material/Search";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PublicIcon from "@mui/icons-material/Public";
import { Facebook, Twitter, LinkedIn, Instagram } from "@mui/icons-material";

const LandingPageOne = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Carousel navButtonsAlwaysVisible indicators={false}>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            textAlign: "center",
            backgroundImage: 'url("/images/bidders1.png")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
            Welcome to Bidders Portal TM
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 4, maxWidth: "600px", mx: "auto", lineHeight: 1.5 }}
          >
            Your one-stop platform for finding verified tenders and procurement
            opportunities across Africa and beyond.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ px: 4, py: 1.5 }}
            href="/tender-information"
          >
            View All Tenders
          </Button>
        </Box>
      </Carousel>

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

      {/* Features Section */}
      <Container sx={{ py: 10, background: "#f9f9f9", borderRadius: "15px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 6 }}
        >
          Why Choose Us
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <SearchIcon fontSize="large" color="primary" />,
              title: "Comprehensive Search",
              description:
                "Explore thousands of tenders using advanced filters tailored to your business needs.",
            },
            {
              icon: <AssignmentTurnedInIcon fontSize="large" color="primary" />,
              title: "Verified Listings",
              description:
                "Our tenders undergo a rigorous verification process to ensure accuracy and transparency.",
            },
            {
              icon: <PublicIcon fontSize="large" color="primary" />,
              title: "Global Opportunities",
              description:
                "Gain access to procurement opportunities from diverse industries worldwide.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  p: 4,
                  borderRadius: "15px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                  background: "white",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {feature.icon}
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", mt: 2, mb: 1 }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      

      {/* Big CTA Section */}
      <Box
        sx={{
          py: 8,
          px: 3,
          background: "linear-gradient(90deg, #4b6cb7, #182848)",
          textAlign: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          Ready to Elevate Your Business?
        </Typography>
        <Typography
          variant="h6"
          sx={{ mb: 4, maxWidth: "600px", mx: "auto", lineHeight: 1.5 }}
        >
          Join thousands of businesses already taking advantage of verified
          tenders and exclusive opportunities with Bidders Portal TM.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "#ff9800",
            color: "white",
            fontSize: "1.2rem",
            px: 5,
            py: 1.5,
            "&:hover": { backgroundColor: "#ffb74d" },
          }}
          href="/get-started"
        >
          Get Started Today
        </Button>
      </Box>
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

export default LandingPageOne;
