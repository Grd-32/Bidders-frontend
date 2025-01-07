import React, { useEffect, useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import axios from 'axios';

const Chart = () => {
  const [tenderStats, setTenderStats] = useState({});
  const [userStats, setUserStats] = useState([]);
  const [transactionTrends, setTransactionTrends] = useState([]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const { data: tenders } = await axios.get('/api/admin/tenders');
        const { data: transactions } = await axios.get('/api/admin/transactions');

        // Prepare Tender Categories Data
        const tenderCategories = tenders.reduce((acc, tender) => {
          acc[tender.ProcurementCategory] = (acc[tender.ProcurementCategory] || 0) + 1;
          return acc;
        }, {});

        setTenderStats(tenderCategories);

        // Prepare Transactions Trends Data
        const transactionsByDate = transactions.reduce((acc, tx) => {
          const date = new Date(tx.createdAt).toDateString();
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setTransactionTrends(Object.entries(transactionsByDate).map(([date, count]) => ({ date, count })));
      } catch (err) {
        console.error('Error fetching chart data:', err);
      }
    };

    fetchStats();
  }, []);

  const tenderData = {
    labels: Object.keys(tenderStats),
    datasets: [
      {
        data: Object.values(tenderStats),
        backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f'],
      },
    ],
  };

  const transactionData = {
    labels: transactionTrends.map((item) => item.date),
    datasets: [
      {
        label: 'Transactions',
        data: transactionTrends.map((item) => item.count),
        backgroundColor: '#ffa726',
      },
    ],
  };

  return (
    <div>
      <h4>Tender Categories</h4>
      <Pie data={tenderData} />
      <h4>Transaction Trends</h4>
      <Bar data={transactionData} />
    </div>
  );
};

export default Chart;
