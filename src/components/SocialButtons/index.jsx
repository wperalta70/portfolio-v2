import { Box, Link, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { downloadResume } from '@utils/utils.js';
import GithubIcon from '@components/SocialButtons/GithubIcon.jsx';
import LinkedinIcon from '@components/SocialButtons/LinkedinIcon.jsx';
import ResumeIcon from '@components/SocialButtons/ResumeIcon.jsx';

const SocialButtons = ({ ...props }) => {
  return (
    <Box
      {...props}
      display='flex'
      alignItems={{ base: 'center', lg: 'flex-start' }}
      justifyContent={{ base: 'center', lg: 'flex-start' }}
      gap='30px'
    >
      {/* Github Link */}
      <Tooltip label='Github'>
        <Link href='https://github.com/wperalta70' target='_blank' rel='noreferrer' fontSize='4.063rem'>
          <GithubIcon w='52px' h='52px' />
        </Link>
      </Tooltip>

      <Tooltip label='LinkedIn'>
        <Link href='https://www.linkedin.com/in/wperalta70' target='_blank' rel='noreferrer' fontSize='4.063rem'>
          <LinkedinIcon w='52px' h='52px' />
        </Link>
      </Tooltip>

      {/* Resume Link */}
      <Tooltip label='Currículum Vitae'>
        <Link onClick={() => downloadResume()} fontSize='4.063rem'>
          <ResumeIcon w='80px' h='55px' />
        </Link>
      </Tooltip>
    </Box>
  );
};

export default SocialButtons;
