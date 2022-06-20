import React from 'react';
import { Box } from '@chakra-ui/react';
// import Navbar from '../components/Navbar'
import '@components/main.css';
import LandingPage from './LandingPage';
import ProjectsPage from './ProjectsPage';

const IndexPage = () => {
  return (
    <>
      <LandingPage />

      <ProjectsPage />

      <Box bg='background.light' minH='500px' />
    </>
  );
};

export default IndexPage;
