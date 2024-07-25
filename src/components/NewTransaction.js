import { Box, Button, styled, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
`;

const NewTransaction = ({ setTransactions }) => {
  const [amount, setAmount] = useState(0);
  const [text, setText] = useState("");

  const addTransaction = () => {
    const transaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: +amount
    };
    setTransactions(prevState => [transaction, ...prevState]);
  };

  return (
    <Container className='transaction'>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label="Enter expense" onChange={e => setText(e.target.value)} />
      <TextField label="Enter amount" type='Number' onChange={e => setAmount(e.target.value)} />
      <Button variant='contained' onClick={addTransaction}>Add Transaction</Button>
    </Container>
  );
};

export default NewTransaction;
