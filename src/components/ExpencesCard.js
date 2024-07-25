import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > div {
    margin: 10px 0;
  }
  @media (min-width: 600px) {
    flex-direction: column;
    & > div {
      flex: 1;
      margin: 10px;
    }
  }
`;

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
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: "green" }}>₹{income}</Typography>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography>Expense</Typography>
          <Typography style={{ color: "red" }}>₹{expense}</Typography>
        </CardContent>
      </Card>

      <Box sx={{ width: '100%', height: '300px' }}>
        <Doughnut data={data} options={options} />
      </Box>
    </Container>
  );
};

export default ExpencesCard;
