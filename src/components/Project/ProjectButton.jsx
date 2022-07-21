import React from 'react';
import { Link } from '@chakra-ui/react';

const ProjectButton = ({ primary = false, label, href, ...props }) => {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noreferrer'
      bg={primary ? 'primary' : 'secondary'}
      p={{ base: '15px 25px', lg: '15px 30px' }}
      textDecoration='none!important'
      letterSpacing='0.2em'
      color={primary ? 'font.darkest' : 'font.dark'}
      shadow={primary && 'sm.primary'}
      _hover={{
        transform: 'scale(1.03)',
        color: primary ? 'black' : 'font.light'
      }}
      textAlign='center'
      {...props}
    >
      {label}
    </Link>
  );
};

export default ProjectButton;
