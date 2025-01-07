import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from './Chart';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
  const [data, setData] = useState({
    tenders: 0,
    users: 0,
    transactions: 0,
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await axios.get('/api/admin/dashboard');
        setData(res.data);
      } catch (err) {
        console.error('Error fetching dashboard data', err);
      }
    };
    fetchDashboardData();
  }, []);

  return (
    <div>
      <Typography variant="h4">Admin Dashboard</Typography>
      <Grid container spacing={2} sx={{ mt: 3 }}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Tenders</Typography>
              <Typography variant="h3">{data.tenders}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Total Users</Typography>
              <Typography variant="h3">{data.users}</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Transactions</Typography>
              <Typography variant="h3">{data.transactions}</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Chart />
    </div>
  );
};

export default Dashboard;
