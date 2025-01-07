import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../services/api';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const { data } = await fetchNotifications();
        setNotifications(data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    loadNotifications();
  }, []);

  return (
    <List>
      {notifications.length > 0 ? (
        notifications.map((notification) => (
          <ListItem key={notification._id}>
            <ListItemText primary={notification.message} secondary={new Date(notification.createdAt).toLocaleString()} />
          </ListItem>
        ))
      ) : (
        <Typography>No notifications available.</Typography>
      )}
    </List>
  );
};

export default NotificationList;
