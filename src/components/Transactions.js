import { Box, Divider, List, Typography } from '@mui/material';
import React from 'react';
import Transaction from './Transaction';

const Transactions = ({ transactions = [], deleteTransaction }) => {
  return (
    <Box>
      <Typography variant='h5'>Transaction History</Typography>
      <Divider />
      <List>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
        ))}
      </List>
    </Box>
  );
};

export default Transactions;
