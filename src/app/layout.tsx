import type { Metadata } from 'next';
import React from 'react';
import { Providers } from '@/app/providers';
import { inter } from './styles/fonts';

export const metadata: Metadata = {
  title: 'Bolt System Test',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
