import { Box, Container, Typography } from "@mui/material";
import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';

export const Topnavbottom = () => {
  return (
    <Box mt={18} mb={2} >
      <Container maxWidth="lg">
        <Box   sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      
            <Typography variant='body1'
            sx={{
                color: '#000',
                fontWeight:'bold',
                position:'relative'
            }}>
            NSSSC-2024
            </Typography>
            <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center', gap:2,color:'gray' }}>
                <MailIcon  sx={{cursor:'pointer'}}/>
                <TwitterIcon  sx={{cursor:'pointer'}}/>
                <LinkedInIcon  sx={{cursor:'pointer'}}/>
                <LocalPrintshopIcon  sx={{cursor:'pointer'}}/>
            </Box>
        </Box>
      </Container>
    </Box>
  );
};
