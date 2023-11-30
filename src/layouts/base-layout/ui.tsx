import React from 'react';
import { Layout } from '../types';

export const BaseLayout: React.FC<Layout> = ({ children, headerSlot }) => {
  return (
    <>
      {headerSlot}
      {children}
    </>
  );
};
