import type { Metadata } from 'next';
import React from 'react';
import { Providers } from '@/app/providers';

export const metadata: Metadata = {
  title: 'Bolt System Test',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ru">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};
export default RootLayout;
