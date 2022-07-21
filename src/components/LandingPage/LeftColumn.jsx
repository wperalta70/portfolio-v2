import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import SocialButtons from '@components/SocialButtons';

const LeftColumn = () => {
  return (
    <VStack
      zIndex={2}
      alignItems={{ base: 'center', lg: 'flex-start' }}
      textAlign={{ base: 'center', lg: 'left' }}
      gap='50px'
      spacing={0}
    >
      <Heading
        fontSize={{ base: 'heading.sm', md: 'heading.lg', lg: 'heading.xl' }}
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
      <SocialButtons />
    </VStack>
  );
};

export default LeftColumn;
