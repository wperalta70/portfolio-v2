import { Box } from '@chakra-ui/react';
import React from 'react';
import Divider from '@components/Divider';
import Technology from '../components/Technology';

const TechnologiesSection = () => {
  return (
    <Box
      display='flex'
      flexDir='column'
      w={{ base: '100%', md: '1500px' }}
      gap={{ base: '10px', md: '20px' }}
    >
      <Divider text='TECHNOLOGIES' centered />

      <Box
        display='grid'
        gridTemplateColumns={{
          base: '1fr',
          md: 'repeat(3, 1fr)'
        }}
        gridGap='20px'
      >
        <Technology
          title='React'
          description='Front-end javascript library for building dynamic user interfaces and single-page applications.'
        />
        <Technology
          title='Django'
          description='Backend python-based framework that attempts to ease the development of complex websites and APIs in a fast manner.'
        />
        <Technology
          title='Typescript'
          description='Superset of Javascript that adds static typing and interfaces to the language. Helps in detecting common errors during development.'
        />
        <Technology
          title='Node'
          description='Runtime environment that allows developers to execute Javascript outside of a web browser, as a backend.'
        />
        <Technology
          title='Docker'
          description='A software framework for building, running, and managing containers that are used in software deployment.'
        />
        <Technology
          title='Linux'
          description='Operating system commonly used in software development.'
        />
      </Box>
    </Box>
  );
};

export default TechnologiesSection;
