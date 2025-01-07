import React, { useEffect, useState } from 'react';
import { fetchUsers, updateUserRole, createTender, deleteTender } from '../services/api';
import { Grid, TextField, Button, Typography, Table, TableBody, TableCell, TableHead, TableRow, Box } from '@mui/material';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tenders, setTenders] = useState([]);
  const [tenderData, setTenderData] = useState({ title: '', description: '', category: '', deadline: '' });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const { data } = await fetchUsers();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    loadUsers();
  }, []);

  const handleCreateTender = async () => {
    try {
      await createTender(tenderData);
      alert('Tender created successfully!');
      setTenderData({ title: '', description: '', category: '', deadline: '' });
    } catch (error) {
      console.error('Error creating tender:', error);
    }
  };

  const handleDeleteTender = async (tenderId) => {
    try {
      await deleteTender(tenderId);
      alert('Tender deleted successfully!');
    } catch (error) {
      console.error('Error deleting tender:', error);
    }
  };

  const handleUpdateRole = async (userId, newRole) => {
    try {
      await updateUserRole({ userId, role: newRole });
      alert('User role updated!');
    } catch (error) {
      console.error('Error updating role:', error);
    }
  };

  return (
    <Grid container spacing={3} padding={3}>
      {/* Tender Management Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Create Tender
        </Typography>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={tenderData.title}
          onChange={(e) => setTenderData({ ...tenderData, title: e.target.value })}
        />
        <TextField
          label="Description"
          fullWidth
          margin="normal"
          value={tenderData.description}
          onChange={(e) => setTenderData({ ...tenderData, description: e.target.value })}
        />
        <TextField
          label="Organization"
          fullWidth
          margin="normal"
          value={tenderData.organization}
          onChange={(e) => setTenderData({ ...tenderData, organization: e.target.value })}
        />
        <TextField
          label="Category"
          fullWidth
          margin="normal"
          value={tenderData.category}
          onChange={(e) => setTenderData({ ...tenderData, category: e.target.value })}
        />
        <TextField
          label="Deadline"
          type="date"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true }}
          value={tenderData.deadline}
          onChange={(e) => setTenderData({ ...tenderData, deadline: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleCreateTender}>
          Create Tender
        </Button>
      </Grid>

      {/* User Management Section */}
      <Grid item xs={12} md={6}>
        <Typography variant="h5" gutterBottom>
          Manage Users
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user._id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    size="small"
                    onClick={() => handleUpdateRole(user._id, user.role === 'admin' ? 'user' : 'admin')}
                  >
                    Toggle Role
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default AdminDashboard;
