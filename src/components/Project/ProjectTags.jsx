import React from 'react';
import { Box } from '@chakra-ui/react';
import ProjectTag from '@components/project/ProjectTag';

const ProjectTags = ({ tags }) => {
  return (
    <Box
      display='flex'
      gap='12px'
      fontFamily='courierPrime'
      color='font.dark'
      fontWeight={400}
      flexWrap='wrap'
    >
      {
        tags.map((tag) => (
          <ProjectTag
            key={tag}
            tag={tag}
          />
        ))
      }
    </Box>
  );
};

export default ProjectTags;
