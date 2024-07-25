import React from 'react';
import { Box, Typography } from '@mui/material';
import  styled  from '@emotion/styled';

const FooterWrapper = styled(Box)`
  padding: 16px;
  background-color: #424242; // Dark gray
  color: #fff;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Typography variant="body2">
        All rights reserved by Shiva
      </Typography>
      <Typography variant="body2">
        Email: gattushivamudiraju@gmail.com | Mobile: 8897414536 | Location: Hyderabad
      </Typography>
    </FooterWrapper>
  );
};

export default Footer;
