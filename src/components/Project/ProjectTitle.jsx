import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const ProjectTitle = ({ title, linkDemo }) => {
  return (
    <Box
      display='flex'
      justifyContent='flex-start'
      alignItems='center'
      w='100%'
      fontSize='2.5rem'
      color='font.dark'
      transition='all 0.15s ease-in-out'
      _before={{
        marginTop: '5px',
        marginRight: '10px',
        content: '""',
        h: '5px',
        w: '30px',
        transform: 'translateY(-50%)',
        bg: 'primary'
      }}
      _hover={{
        color: 'font.light',
        transform: 'translateX(5px)'
      }}
    >
      <Link
        href={linkDemo}
        target='_blank'
        rel='noreferrer'
        textDecoration='none!important'
      >
        {title}
      </Link>
    </Box>
  );
};

export default ProjectTitle
;
