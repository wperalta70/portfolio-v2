import React from 'react';
import { Box } from '@chakra-ui/react';
import ProjectButton from '@components/Project/ProjectButton';

const ProjectButtons = ({ linkRepo, linkDemo }) => {
  return (
    <Box
      display='flex'
      gap='15px'
    >
      <ProjectButton primary label='VIEW DEMO' href={linkDemo} />
      <ProjectButton label='VIEW CODE' href={linkRepo} />
    </Box>
  );
};

export default ProjectButtons;
