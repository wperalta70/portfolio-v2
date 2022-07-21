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
      minH='100vh'
      overflow={{ base: 'hidden', lg: 'visible' }}
      position='relative'
      _before={{
        content: '""',
        position: 'absolute',
        overflow: 'hidden',
        bgImage: withPrefix('./images/dev.png'),
        bgSize: { base: 'cover' },
        bgPosition: { base: 'calc(50% - 125px)', md: 'calc(50%)', lg: 0 },
        bgRepeat: 'no-repeat',
        w: { base: '650px', md: '750px', lg: 0 },
        h: { base: '650px', md: '750px', lg: 0 },
        opacity: { base: 0.10, lg: 0 },
        zIndex: 2
      }}
    >
      <HStack
        spacing={0}
        paddingTop={{ lg: '50px' }}
        justifyContent={{ base: 'flex-start', lg: 'center' }}
      >
        <VStack
          width={{ base: '100%', lg: '1500px' }}
          position='relative'
          alignItems='flex-start'
          spacing={0}
          gap='30px'
        >
          <Image
            src={devIllustration}
            zIndex={1}
            h={{ base: null, lg: '1000px' }}
            w={{ base: null, lg: '1000px' }}
            position='absolute'
            top='30px'
            left='50%'
            transform='translateX(calc(-50% - 125px))'
            display={{ base: 'none', lg: 'block' }}
          />
          <HStack
            padding={{ base: '30px 20px 0 20px', lg: 0 }}
            w='100%'
            justifyContent={{ sm: 'center', lg: 'flex-start' }}
            mb='500px'
          >
            <LogoSolid
              w={{ base: '50px', md: '70px' }}
              h={{ base: '50px', md: '70px' }}
            />
          </HStack>
          <HStack
            w='100%'
            justifyContent={{ base: 'center', lg: 'space-between' }}
            flexWrap={{ base: 'wrap', lg: 'nowrap' }}
            spacing={0}
            rowGap={{ base: '30px', lg: 0 }}
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
