import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Company", to: "/company" },
    { label: "Tender Information", to: "/tender-information" },
    { label: "Contact", to: "/contact-us" },
    { label: "Auto Tender Notifications", to: "/tender-notification" },
    { label: "Supplier Pre Qualification", to: "/supplier-prequalification" },
    { label: "Tender Information", to: "/tender-information" },
    { label: "Bidding Assistance", to: "/bidding-assistance" },
    { label: "Become a Member", to: "/become-a-member" },
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ background: "transparent", boxShadow: "none", zIndex: 10 }}>
      {/* Top Toolbar */}
      <Box sx={{ backgroundColor: "#002544", color: "white", py: 0.5 }}>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            {/* Contact Info */}
            <Box display="flex" alignItems="center" flexWrap="wrap" sx={{ mb: { xs: 1, md: 0 } }}>
              <EmailIcon sx={{ mr: 1 }} />
              <Typography noWrap>info@biddersportal.com</Typography>
              <Box mx={2} />
              <PhoneIcon sx={{ mr: 1 }} />
              <Typography noWrap>+254787175632</Typography>
            </Box>

            {/* Social Media Icons */}
            <Box>
              <IconButton color="inherit" size="small">
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <LinkedInIcon fontSize="small" />
              </IconButton>
              <IconButton color="inherit" size="small">
                <InstagramIcon fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Main Navbar */}
      <Toolbar sx={{ backgroundColor: "#002534", minHeight: 80 }}>
        <Container sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="img"
              src="/images/logo.png"
              alt="Bidders Portal Logo"
              sx={{ height: 50, mr: 2 }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Bidders Portal
            </Typography>
          </Box>

          {/* Navbar Links */}
          {isMobile ? (
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              {navItems.slice(0, 4).map((item) => (
                <Button key={item.label} color="inherit" component={Link} to={item.to}>
                  {item.label}
                </Button>
              ))}
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#6a5acd",
                  color: "#fff",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#5a4dcf" },
                }}
                component={Link}
                to="/auth"
              >
                Log In
              </Button>
            </Box>
          )}
        </Container>
      </Toolbar>

      {/* Additional Buttons Section */}
      {!isMobile && (
        <Box sx={{ backgroundColor: "#002534", py: 2, display: "flex", justifyContent: "center", gap: 2 }}>
          {navItems.slice(4).map((item) => (
            <Button
              key={item.label}
              variant="contained"
              sx={{
                backgroundColor: "#9b79ff",
                color: "white",
                textTransform: "none",
                fontSize: "1rem",
                "&:hover": { backgroundColor: "#8565e6" },
              }}
              component={Link}
              to={item.to}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      )}

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Menu
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem button key={item.label} component={Link} to={item.to} onClick={toggleDrawer(false)}>
                <ListItemText primary={item.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
