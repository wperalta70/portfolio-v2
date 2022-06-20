import React from 'react';
import { Box } from '@chakra-ui/react';

const Divider = ({ text, centered = false }) => {
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      color={{ base: 'font.dark', md: 'font.darker' }}
      w='100%'
      letterSpacing='0.2em'
      fontSize={{ md: 'text.sm' }}
      _before={
        centered && {
          marginRight: '10px',
          content: '""',
          height: '2px',
          transform: 'translateY(-50%)',
          bg: { base: 'font.dark', md: 'font.darker' },
          flexGrow: 1
        }
      }
      _after={{
        marginLeft: '10px',
        content: '""',
        height: '2px',
        transform: 'translateY(-50%)',
        bg: { base: 'font.dark', md: 'font.darker' },
        flexGrow: 1
      }}
    >
      {text}
    </Box>
  );
};

export default Divider;
