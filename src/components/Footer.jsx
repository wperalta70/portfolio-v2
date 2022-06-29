import { Box } from '@chakra-ui/react';
import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <Box
      color='font.dark'
      fontFamily='courierPrime'
      margin='20px 0'
      transition='all 0.15s ease-in-out'
      _hover={{
        color: 'font.light'
      }}
    >
      <Link
        href='https://www.linkedin.com/in/wperalta70'
        target='_blank'
        rel='noreferrer'
      >
        Designed & built by Waldemar Peralta
      </Link>
    </Box>
  );
};

export default Footer;
