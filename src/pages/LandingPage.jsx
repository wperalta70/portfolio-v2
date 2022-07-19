import React from 'react';
import { Box, HStack, Image, VStack } from '@chakra-ui/react';
import LogoSolid from '@components/LogoSolid';
import { withPrefix } from 'gatsby';
import devIllustration from '@images/dev-shadow.png';
import LeftColumn from '../components/LandingPage/LeftColumn';
import RightColumn from '../components/LandingPage/RightColumn';

const LandingPage = () => {
  return (
    <Box
      id='main div'
      bg='background.light'
      h='100vh'
    >
      <HStack
        id='HStack1'
        spacing={0}
        paddingTop={{ md: '3%' }}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        _before={{
          content: '""',
          position: 'absolute',
          bgImage: withPrefix('./images/dev.png'),
          bgSize: { base: 'cover' },
          bgPosition: { base: 'calc(50% - 125px)', md: 0 },
          bgRepeat: 'no-repeat',
          w: { base: '650px', md: 0 },
          h: { base: '650px', md: 0 },
          opacity: { base: 0.10, md: 0 },
          zIndex: 2
        }}
      >
        <VStack
          id='VStack 1'
          spacing={0}
          width={{ base: '100%', md: '1500px' }}
          position='relative'
          rowGap={{ base: 0, md: '30px' }}
          alignItems='flex-start'
        >
          <Image
            src={devIllustration}
            zIndex={1}
            h={{ base: null, md: '1000px' }}
            w={{ base: null, md: '1000px' }}
            position='absolute'
            top='20px'
            left='50%'
            transform='translateX(calc(-50% - 125px))'
            display={{ base: 'none', md: 'block' }}
          />
          <Box padding={{ base: '5%', md: 0 }} id='boxlogo'>
            <LogoSolid
              w={{ base: '50px', md: '70px' }}
              h={{ base: '50px', md: '70px' }}
            />
          </Box>
          <HStack
            id='testing123'
            w='100%'
            justifyContent='space-between'
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
          >
            <LeftColumn />
            <RightColumn />
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default LandingPage;
