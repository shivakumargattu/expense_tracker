import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Container = styled(Box)`{
  display: flex;
  flex-direction: column;
}`;

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
    <Container className='transaction'>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label="Enter expense" value={sourceInc} onChange={e => setSourceInc(e.target.value)} />
      <TextField label="Enter amount" type='number' value={amount} onChange={e => setAmount(e.target.value)} />
      <Button variant='contained' onClick={addTransaction}>Add Transaction</Button>
    </Container>
  );
};

export default NewTransaction;
