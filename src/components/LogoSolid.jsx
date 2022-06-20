import { Icon } from '@chakra-ui/react';
import React from 'react';

const LogoSolid = ({ w, h }) => {
  return (
    <Icon
      w={w} h={h} viewBox='0 0 71 82' sx={{
        filter: 'drop-shadow(0px 4px 60px rgba(255, 175, 41, 0.6))'
      }}
    >
      <svg fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M35.5 0L71 20.5V61.5L35.5 82L0 61.5V20.5L35.5 0Z' fill='#FFAF29' />
        <path d='M35.5836 37.5586L27.1461 55.3516H24.2165L12.2243 27.7148H19.4313L25.8571 42.793L32.8688 27.7148H38.3375L45.3493 42.793L51.736 27.7148H58.943L46.9899 55.3516H44.0602L35.5836 37.5586Z' fill='#323647' />
      </svg>
    </Icon>
  );
};

export default LogoSolid;
