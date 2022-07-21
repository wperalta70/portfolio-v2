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
      bg='background.light'
      h='100vh'
      overflow={{ base: 'hidden', md: 'visible' }}
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        overflow: 'hidden',
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
      <HStack
        spacing={0}
        paddingTop={{ md: '3%' }}
        justifyContent={{ base: 'flex-start', md: 'center' }}
      >
        <VStack
          width={{ base: '100%', md: '1500px' }}
          position='relative'
          alignItems='flex-start'
          spacing={0}
          gap='30px'
        >
          <Image
            src={devIllustration}
            zIndex={1}
            h={{ base: null, md: '1000px' }}
            w={{ base: null, md: '1000px' }}
            position='absolute'
            top='30px'
            left='50%'
            transform='translateX(calc(-50% - 125px))'
            display={{ base: 'none', md: 'block' }}
          />
          <Box padding={{ base: '5%', md: 0 }}>
            <LogoSolid
              w={{ base: '50px', md: '70px' }}
              h={{ base: '50px', md: '70px' }}
            />
          </Box>
          <HStack
            w='100%'
            justifyContent={{ base: 'center', md: 'space-between' }}
            flexWrap={{ base: 'wrap', md: 'nowrap' }}
            spacing={0}
            rowGap={{ base: '30px', md: 0 }}
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
