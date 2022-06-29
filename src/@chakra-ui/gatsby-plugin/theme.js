import { extendTheme } from '@chakra-ui/react';
import '@fontsource/poppins/';
import '@fontsource/ubuntu/';

const theme = {
  colors: {
    primary: '#FFAF29', // primary color
    secondary: '#323647', // secondary for inactive cards
    background: {
      light: '#323647',
      dark: '#242734'
    },
    card: {
      background: {
        primary: '#FFAF29',
        secondary: '#424657'
      },
      text: {
        primary: '#424657',
        secondary: '#A7A9B0'
      }
    },
    font: {
      light: '#EBEBEC', // for headings
      dark: '#838593', // for normal text, buttons, and tags
      darker: '#666874', // for inactive links and separators
      darkest: '#323647' // for primary background
    }
  },
  fonts: {
    poppins: '"Poppins", sans-serif',
    ubuntu: '"Ubuntu", sans-serif',
    courierPrime: '"Courier Prime", monospace'
  },
  fontSizes: {
    'heading.xl': '5.625rem',
    'heading.lg': '4.375rem',
    'heading.sm': '3.125rem',
    'heading.xs': '2.5rem',
    'text.lg': '1.75rem',
    'text.md': '1.563rem',
    'text.sm': '1.2rem',
    'text.xs': '1.125rem'
  },
  sizes: {
    'icon.md': '3.125rem',
    'icon.sm': '1.875rem'
  },
  shadows: {
    'lg.primary': '0px 0px 60px rgba(255, 175, 41, 0.6)',
    'lg.secondary': '0px 0px 60px rgba(255, 175, 41, 0.3)',
    'sm.primary': '0px 0px 16px rgba(255, 175, 41, 0.6)',
    'sm.secondary': '0px 0px 16px rgba(255, 175, 41, 0.3)'
  }
};

export default extendTheme(theme);
