import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpencesCard = ({ transactions = [] }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const income = amount.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
  const expense = amount.filter(item => item < 0).reduce((acc, item) => (acc -= item), 0).toFixed(2);

  const data = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        label: 'Expenses',
        data: [income, Math.abs(expense)],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <Box mb={2}>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5">Income</Typography>
          <Typography style={{ color: "green" }}>₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5">Expense</Typography>
          <Typography style={{ color: "red" }}>₹{expense}</Typography>
        </CardContent>
      </Card>
      <Box sx={{ width: '100%', height: '300px', mt: 2 }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Box>
  );
};

export default ExpencesCard;
