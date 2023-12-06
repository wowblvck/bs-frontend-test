'use client';

import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from 'react';
import { theme } from './styles/theme';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
        </QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};
