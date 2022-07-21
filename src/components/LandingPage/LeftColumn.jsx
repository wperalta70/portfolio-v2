import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import SocialButtons from '@components/SocialButtons';

const LeftColumn = () => {
  return (
    <VStack
      zIndex={2}
      alignItems={{ base: 'center', md: 'flex-start' }}
      textAlign={{ base: 'center', md: 'left' }}
      gap='50px'
      spacing={0}
    >
      <Heading
        fontSize={{ base: 'heading.sm', md: 'heading.xl' }}
        minW='100%'
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
      {/* <SocialButtons marginTop={{ base: '20px', md: '80px' }} /> */}
      <SocialButtons />
    </VStack>
  );
};

export default LeftColumn;
