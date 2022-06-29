import { Box, Text } from '@chakra-ui/react';
import ReactIcon from '@components/Technology/ReactIcon';
import React from 'react';

const Technology = ({ icon, title, description }) => {
  return (
    <Box
      h={{ base: '175px', md: '250px' }}
      display='flex'
      flexDir='column'
      justifyContent='center'
      gap='10px'
      padding='30px'
      bg='card.background.secondary'
      color='card.text.secondary'
      transition='all 0.15s ease'
      _hover={{
        bg: 'card.background.primary',
        color: 'card.text.primary',
        shadow: 'lg.primary'
      }}
    >
      <ReactIcon size={{ base: 'icon.sm', md: 'icon.md' }} />
      <Text
        fontSize={{ md: 'text.lg' }}
      >
        {title}
      </Text>
      <Text
        fontWeight={500}
        fontSize={{ base: '0.8rem', md: '1rem' }}
      >
        {description}
      </Text>
    </Box>
  );
};

export default Technology;
