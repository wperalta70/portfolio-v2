import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import SocialButtons from '@components/SocialButtons';

const LeftColumn = () => {
  return (
    <Box
      zIndex={2}
      w='100%'
    >
      <Heading
        fontSize={{ base: 'heading.sm', md: 'heading.xl' }}
        minW='100%'
        textAlign={{ base: 'center', md: 'left' }}
        fontFamily='poppins'
        fontWeight={900}
        color='font.light'
        lineHeight={1}
        className='highlight'
      >
        Peralta
        <br />
        Waldemar.
      </Heading>
      <SocialButtons marginTop={{ base: '20px', md: '80px' }} />
    </Box>
  );
};

export default LeftColumn;
