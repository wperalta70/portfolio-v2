import { Box, Link, Text } from '@chakra-ui/react';
import React from 'react';
import Divider from '@components/Divider';

const RightColumn = () => {
  return (
    <Box
      w={{ base: '100%', md: '500px' }}
      p={{ base: 0, md: 0 }}
      fontFamily='poppins'
      fontWeight={900}
      zIndex={2}
    >
      <Box
        fontSize={{ base: 'text.xs', md: 'text.lg' }}
        display='flex'
        flexDir='row'
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
        justifyContent={{ base: 'center', md: 'space-between' }}
        gap={{ base: '20px', md: '10px' }}
        marginTop={{ base: '15px', md: 0 }}
      >
        <Link
          href='#'
          className='nav-active'
          textDecoration='none!important'
          color='font.light'
          _hover={{
            color: 'font.light',
            transform: 'scale(1.025)'
          }}
          whiteSpace='nowrap'
        >
          About me
        </Link>

        <Link
          href='#projects'
          textDecoration='none!important'
          color={{ base: 'font.dark', md: 'font.darker' }}
          _hover={{
            color: 'font.light',
            transform: 'scale(1.025)'
          }}
        >
          Projects
        </Link>

        <Link
          href='#technologies'
          textDecoration='none!important'
          color={{ base: 'font.dark', md: 'font.darker' }}
          _hover={{
            color: 'font.light',
            transform: 'scale(1.025)'
          }}
        >
          Technologies
        </Link>
      </Box>

      <Box
        display='flex'
        flexDir='column'
        gap='10px'
        justifyContent='center'
        alignItems='center'
        marginTop={{ base: '50px', md: '65px' }}
        fontFamily='poppins'
        color='font.dark'
        padding={{ base: '0 20px', md: 0 }}
      >
        <Divider text='ABOUT ME' />
        <Text
          fontFamily='ubuntu'
          fontSize={{ base: 'text.sm', md: 'text.md' }}
          w='100%'
          color='font.light'
        >
          Full stack software developer.
        </Text>
        <Text
          w='100%'
        >
          I'm a semi senior software developer based in Córdoba - Argentina, whose passion is to learn and experiment with new technologies.
        </Text>
        <Text
          w='100%'
          paddingBottom='10px'
        >
          I enjoy creating things for the internet - from full stack apps, to tools that help me work more efficiently, to building things just for fun.
        </Text>
      </Box>
    </Box>
  );
};

export default RightColumn;
