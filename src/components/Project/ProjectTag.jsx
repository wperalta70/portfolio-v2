import React from 'react';
import { Box } from '@chakra-ui/react';

const ProjectTag = ({ tag }) => {
  return (
    <Box
      bg='secondary'
      p='6px 12px'
    >
      {tag}
    </Box>
  );
};

export default ProjectTag;
