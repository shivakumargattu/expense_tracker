import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const BalanceText = styled(Typography)`
  font-style: "roboto";
  font-size: 20px;
`;

export const Balance = ({ transactions = [] }) => {
  const amount = transactions.map(transaction => transaction.amount);
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: ₹ {total}</BalanceText>
    </Box>
  );
};
