import React from 'react';
import { Box, Image, Link } from '@chakra-ui/react';

const ProjectPreview = ({ linkDemo, image }) => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      minW='800px'
      maxW='800px'
      minH='450px'
      maxH='450px'
      borderRadius='10px'
      overflow='hidden'
    >
      <Link href={linkDemo} target='_blank' rel='noreferrer'>
        <Image
          src={image}
          minW='100%'
          maxW='100%'
          minH='100%'
          maxH='100%'
          objectFit='cover'
          objectPosition='center'
          transition='all 0.2s ease-in-out'
          _hover={{
            transform: 'scale(1.05)'
          }}
        />
      </Link>
    </Box>
  );
};

export default ProjectPreview
;
