import React, { useState, useEffect } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [formData, setFormData] = useState({ title: '', message: '' });

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('/api/admin/notifications');
        setNotifications(res.data);
      } catch (err) {
        console.error('Error fetching notifications:', err);
      }
    };

    fetchNotifications();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendNotification = async () => {
    try {
      await axios.post('/api/admin/notifications', formData);
      setNotifications([...notifications, formData]);
      setFormData({ title: '', message: '' });
    } catch (err) {
      console.error('Error sending notification:', err);
    }
  };

  return (
    <div>
      <Typography variant="h4">Manage Notifications</Typography>
      <Box sx={{ mt: 3 }}>
        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          fullWidth
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary" onClick={handleSendNotification}>
          Send Notification
        </Button>
      </Box>
      <Table sx={{ mt: 3 }}>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Message</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((notification) => (
            <TableRow key={notification._id}>
              <TableCell>{notification.title}</TableCell>
              <TableCell>{notification.message}</TableCell>
              <TableCell>{new Date(notification.createdAt).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Notifications;
