import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

const AdminDashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: '250px',
          backgroundColor: '#f4f4f4',
          height: '100vh',
          p: 2,
          boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Typography variant="h5" sx={{ mb: 3 }}>
          Admin Dashboard
        </Typography>
        <List>
          <ListItem button component={Link} to="/admin/tenders">
            <ListItemText primary="Tenders" />
          </ListItem>
          <ListItem button component={Link} to="/admin/transactions">
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem button component={Link} to="/admin/notifications">
            <ListItemText primary="Notifications" />
          </ListItem>
          <ListItem button component={Link} to="/admin/charts">
            <ListItemText primary="Charts" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminDashboard;
