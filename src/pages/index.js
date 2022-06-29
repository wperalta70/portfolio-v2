import React from 'react';
import { Box } from '@chakra-ui/react';
// import Navbar from '../components/Navbar'
import '@components/main.css';
import LandingPage from './LandingPage';
import ProjectsSection from './ProjectsSection';
import TechnologiesSection from './TechnologiesSection';

const IndexPage = () => {
  return (
    <>
      <LandingPage />

      <Box
        bg='background.dark'
        display='flex'
        flexDir='column'
        alignItems='center'
        fontFamily='poppins'
        fontWeight={900}
        padding={{ base: '20px', md: '75px 0' }}
        gap='50px'
      >

        <ProjectsSection />

        <TechnologiesSection />

      </Box>

      <Box bg='background.light' minH='100vh' />
    </>
  );
};

export default IndexPage;
