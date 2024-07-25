import { Box, Typography } from '@mui/material';
import React from 'react';

const Balance = ({ transactions = [] }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Box mb={2}>
      <Typography variant="h2" color="primary">Balance: ₹ {total}</Typography>
    </Box>
  );
};

export default Balance;
