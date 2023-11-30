import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'hsl(222, 83%, 98%)',
        color: '#1b254b',
      },
    },
  },
  fonts: {
    body: 'var(--font-inter)',
  },
  colors: {
    bs: {
      50: '#e9e5ff',
      100: '#bbb3ff',
      200: '#8f82ff',
      300: '#6350fd',
      400: '#371efb',
      500: '#1e04e1',
      600: '#1502b0',
      700: '#0d017f',
      800: '#06004e',
      900: '#02001f',
    },
  },
});
