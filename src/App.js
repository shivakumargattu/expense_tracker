import './App.css';
import { Box, Typography, styled } from "@mui/material";
import { Balance } from './components/Balance';
import ExpencesCard from './components/ExpencesCard';
import NewTransaction from './components/NewTransaction';
import { useState, useEffect } from 'react';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  margin: 0;
  font-size: 36px;
  color: black;
  text-transform: uppercase;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 90%;
  max-width: 800px;
  padding: 10px;
  border-radius: 20px;
  margin: auto;
  & > div {
    padding: 12px;
  }
  
  @media (min-width: 600px) {
    flex-direction: row;
    & > div {
      width: 50%;
    }
  }
`;

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const localTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(localTransactions);
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <Box className="App">
      <Header>Expense Tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpencesCard transactions={transactions} />
          
        </Box>
        <Box>
        <NewTransaction setTransactions={setTransactions} />
          <Transactions transactions={transactions} deleteTransaction={deleteTransaction} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
