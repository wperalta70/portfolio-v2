import { Box, Heading, Text } from '@chakra-ui/react';
import LogoSolid from '@components/LogoSolid';
import React from 'react';
import ProjectButton from '@components/Project/ProjectButton';

const ContactSection = () => {
  return (
    <Box
      display='flex'
      flexDir='column'
      justifyContent='center'
      alignItems='center'
      padding={{ base: '5rem 2rem', lg: '5rem 0' }}
      gap='1.3rem'
      maxW='35rem'
    >
      <LogoSolid
        zIndex={3}
        w={{ base: '50px', lg: '70px' }}
        h={{ base: '50px', lg: '70px' }}
      />
      <Heading
        color='font.light'
        fontFamily='ubuntu'
        fontSize={{ base: 'heading.xs', lg: 'heading.lg' }}
      >
        Get in touch
      </Heading>
      <Text
        color='font.dark'
        fontSize={{ base: 'text.xs', lg: 'text.sm' }}
        textAlign='center'
      >
        Thanks for visiting! If you have any questions or just want to have a chat, feel free to get in touch :)
      </Text>
      <ProjectButton
        label='ADD ME'
        href='https://www.linkedin.com/in/wperalta70'
        primary
        fontWeight={600}
        p={{ base: '15px 50px', lg: '15px 50px' }}
        marginTop={{ base: '30px', lg: '50px' }}
      />
    </Box>
  );
};

export default ContactSection;
