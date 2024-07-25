import { Box, Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NewTransaction = ({ setTransactions }) => {
  const [amount, setAmount] = useState(0);
  const [sourceInc, setSourceInc] = useState("");

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 10000),
      text: sourceInc,
      amount: +amount
    };
    setTransactions(transaction);
    setSourceInc("");
    setAmount(0);
  };

  return (
    <Box>
      <Typography variant="h5" mb={2}>New Transaction</Typography>
      <TextField
        label="Enter expense"
        fullWidth
        margin="normal"
        value={sourceInc}
        onChange={e => setSourceInc(e.target.value)}
      />
      <TextField
        label="Enter amount"
        type='number'
        fullWidth
        margin="normal"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      <Button
        variant='contained'
        color="primary"
        fullWidth
        onClick={addTransaction}
      >
        Add Transaction
      </Button>
    </Box>
  );
};

export default NewTransaction;
