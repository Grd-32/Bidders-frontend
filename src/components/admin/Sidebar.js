import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <List>
      <ListItem button component={Link} to="/admin/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/admin/tenders">
        <ListItemText primary="Tenders" />
      </ListItem>
      <ListItem button component={Link} to="/admin/users">
        <ListItemText primary="Users" />
      </ListItem>
      <ListItem button component={Link} to="/admin/transactions">
        <ListItemText primary="Transactions" />
      </ListItem>
      <ListItem button component={Link} to="/admin/notifications">
        <ListItemText primary="Notifications" />
      </ListItem>
    </List>
  );
};

export default Sidebar;
