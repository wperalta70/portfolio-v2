import React from 'react';
import { Box } from '@chakra-ui/react';

const ProjectDescription = ({ description }) => {
  return (
    <Box
      bg='secondary'
      color='font.dark'
      p='20px 25px'
      fontWeight={400}
    >
      {description}
    </Box>
  );
};

export default ProjectDescription;
