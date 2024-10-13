import React from 'react'
import TopNav from '../components/Topnav'
import { Box } from '@mui/material'
import { Topnavbottom } from '@/components/Topnavbottom'
import Header from '@/components/Header'
import CardComponent from '@/components/card'
import Footer from '@/components/footer'
const Home = () => {
  return (
    <Box>
      <TopNav />
      <Topnavbottom />
      <Header />
      <CardComponent />
     <Footer />
    </Box>
  )
}

export default Home