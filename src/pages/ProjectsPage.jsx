import React from 'react';
import { Box } from '@chakra-ui/react';
import Divider from '@components/Divider';
import Project from '@components/Project';

const ProjectsPage = () => {
  return (
    <Box
      bg='background.dark'
      h='100vh'
      display='flex'
      justifyContent='center'
      fontFamily='poppins'
      fontWeight={900}
    >
      <Box
        display='flex'
        flexDir='column'
        justifyContent='flex-start'
        alignItems='center'
        w={{ base: '100%', md: '1500px' }}
        padding={{ base: '20px', md: '75px 0' }}
      >
        <Divider text='PROJECTS' />

        <Project
          title='Project Title'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat hendrerit justo eget efficitur. Curabitur ornare leo ornare elit tincidunt blandit. Ut nulla purus, accumsan vel semper eget'
          tags={['Python', 'Django', 'Javascript', 'React', 'Gatsby', 'Docker', 'Git']}
          image='https://source.unsplash.com/random/800x600'
          linkRepo='https://github.com/wperalta70/nexus'
          linkDemo='http://nexus.waldemarperalta.com'
        />

      </Box>
    </Box>
  );
};

export default ProjectsPage;
