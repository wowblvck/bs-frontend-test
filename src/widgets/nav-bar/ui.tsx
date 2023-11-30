'use client';

import React from 'react';
import { Heading, HStack, IconButton } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdChevronLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';

type NavBarProps = {
  title?: string;
};

export const NavBar: React.FC<NavBarProps> = ({ title }) => {
  const router = useRouter();

  return (
    <HStack spacing={3}>
      <IconButton
        aria-label="Return to back page"
        icon={<Icon as={MdChevronLeft} boxSize={6} />}
        onClick={() => router.back()}
        pl={3}
        pr={3}
      />
      <Heading as="h2" size="lg">
        {title ? title : 'Вернуться назад'}
      </Heading>
    </HStack>
  );
};
