import { ListItem, ListItemText, IconButton } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Transaction = ({ transaction, deleteTransaction }) => {
  const color = transaction.amount > 0 ? "green" : "red";

  return (
    <ListItem style={{ background: `${color}`, color: "#fff", margin: "10px", borderRadius: "8px" }}>
      <ListItemText>{transaction.text}</ListItemText>
      <ListItemText>{transaction.amount}</ListItemText>
      <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
        <DeleteIcon style={{ color: "#fff" }} />
      </IconButton>
    </ListItem>
  );
};

export default Transaction;
