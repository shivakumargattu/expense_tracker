import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import  styled  from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  background: #1976d2; // Primary color
`;

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Typography)`
  color: #fff;
  text-decoration: none;
`;

const NavButtons = styled(Box)`
  display: flex;
  gap: 10px;
`;

const Navbar = () => {
  return (
    <StyledAppBar position="static">
      <ToolbarStyled>
        <Logo variant="h6">
          Expense Tracker
        </Logo>
        <NavButtons>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </NavButtons>
      </ToolbarStyled>
    </StyledAppBar>
  );
};

export default Navbar;
