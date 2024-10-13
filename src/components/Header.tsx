import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{
            backgroundColor:'#232b38',
            height: '45px',
            display: 'block',
        }}>
        <Box display='flex' justifyContent='start' gap={2} alignItems='center' py={1.5} px={2}>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none' }}>Online Registration</Link>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none'}}>Offline Registration </Link>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none'}}>Group Registra</Link>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none'}}>Conference Brochure </Link>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none'}}>ONE2ONE</Link>
            <Link  href="#" sx={{color: 'gray', fontSize: '12px', fontWeight: 'bold',textDecoration: 'none'}}>Vendor Demos Schedule</Link>
        </Box>
        </Box>
        <Box
      sx={{
        background: 'linear-gradient(to right, #0091ae, #00a998)',
        minHeight: '140px',
        padding: '10px',
        paddingBottom: '5px',
        backgroundImage: 'url(https://insssc.com/wp-content/uploads/2019/11/header_background.png)',
        backgroundSize: 'cover',
        color: 'white',
        // borderRadius: '8px',
      }}
    >
         
   <Box sx={{
      fontSize:'22px',
      color:' #f5f4e0',
      fontWeight:'bold',
      fontFamily: 'georgia',
      textTransform: 'none',
      lineHeight: '30px',
      padding:'10px',
      margin:'0px',
      }}>
      <Typography  variant="h5" sx={{fontWeight:'bold',}}>National Student Safety & Security Conference & Workshop</Typography>
      <Typography variant="h5" sx={{fontWeight:'bold',}}>Co-located Events</Typography>
      </Box>
      <Box display='flex' justifyContent='space-around' alignItems='center' my={4}>
      <img src='https://insssc.com/wp-content/uploads/2022/12/sro-white.png'
    width={200}
     height={200}
    />
    <img src='https://insssc.com/wp-content/uploads/2022/12/smh-white.png'
    width={200}
     height={200}
    />
    <img src='https://insssc.com/wp-content/uploads/2022/12/asb-white.png'
    width={200}
     height={200}
    />
    <img src='https://insssc.com/wp-content/uploads/2023/11/CSCS-2048x683.png'
    width={200}
     height={200}
    />
      </Box>
      
    </Box>
    <Box>
   
    </Box>
      </Container>
    </Box>
  )
}

export default Header
