import React from 'react';
import { Box, Heading, Link, Text } from '@chakra-ui/react';
import Divider from '@components/Divider';
import SocialButtons from '@components/SocialButtons/SocialButtons';
import LogoSolid from '@components/LogoSolid';
import devImage from '@images/dev-shadow.png';

const LandingPage = () => {
  return (
    <Box
      bg='background.light'
      minH='100vh'
      p={{ base: 0, md: '80px 100px' }}
      display='flex'
      justifyContent='flex-start'
      alignItems='flex-start'
      gap={{ base: '20px', md: '200px' }}
      flexWrap={{ base: 'wrap', md: 'nowrap' }}
      position='relative'
      zIndex={1}
      _before={{
        content: '""',
        position: 'absolute',
        bgImage: devImage,
        bgSize: { base: 'cover', md: '1000px 1000px' },
        bgPosition: { base: 'calc(50% - 30px) 50%', md: 'calc(50% - 180px) calc(100% + 150px)' },
        bgRepeat: 'no-repeat',
        w: { base: 'calc(100%)', md: 'calc(100% - 200px)' },
        h: { base: 'calc(100%)', md: 'calc(100% - 80px)' },
        opacity: { base: 0.10, md: 1 },
        zIndex: -1
      }}
    >
      <Box
        h={{ base: '30%', md: 'auto' }}
        w={{ base: '100%', md: '50%' }}
        p={{ base: '20px 20px 0px 20px', md: 0 }}
      >
        <LogoSolid
          w={{ base: '50px', md: '70px' }}
          h={{ base: '50px', md: '70px' }}
        />
        <Heading
          marginTop='20px'
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
        <SocialButtons marginTop={{ base: '40px', md: '80px' }} />
      </Box>

      <Box
        w={{ base: '100%', md: '500px' }}
        p={{ base: '0px 20px', md: 0 }}
        fontFamily='poppins'
        fontWeight={900}
        marginTop={{ base: 0, md: '100px' }}
      >
        <Box
          fontSize={{ base: 'text.sm', md: 'text.lg' }}
          display='flex'
          flexDir='row'
          justifyContent='space-between'
          gap='25px'
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
          >
            I enjoy creating things for the internet - from full stack apps, to tools that help me work more efficiently, to building things just for fun.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
