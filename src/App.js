import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Container, CssBaseline, Grid, Paper, Typography, ThemeProvider, createTheme } from "@mui/material";
import  Balance  from './components/Balance';
import ExpencesCard from './components/ExpencesCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';
import Navbar from './components/Navbar';


const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
});

const initialData = [
  { id: 1, text: "Books", amount: -2000 },
  { id: 2, text: "Salary", amount: 26000 },
  { id: 3, text: "Clothes", amount: -7000 },
  { id: 4, text: "Bonus", amount: 5000 }
];

function App() {
  const [transactions, setTransactions] = useState(initialData);

  useEffect(() => {
    const localTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (localTransactions && localTransactions.length > 0) {
      setTransactions(localTransactions);
    }
  }, []);

  useEffect(() => {
    if (transactions !== initialData) {
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const addTransaction = (transaction) => {
    if (transactions === initialData) {
      setTransactions([transaction]);
    } else {
      setTransactions([transaction, ...transactions]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Container maxWidth="lg">
        <Box mt={4} mb={2} textAlign="center">
          <Typography variant="h1" color="primary">Expense Tracker</Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Balance transactions={transactions} />
              <ExpencesCard transactions={transactions} />
              <NewTransaction setTransactions={addTransaction} />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
            </Paper>
          </Grid>
        </Grid>
        
      </Container>
      
    </ThemeProvider>
  );
}

export default App;
