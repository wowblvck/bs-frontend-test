'use client';

import { BaseLayout } from '@/layouts';
import { Header } from '@/widgets/header';
import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import { RequestsFilter } from '@/features/requests-filter';
import { RequestsList } from '@/entities/requests';
import { NavBar } from '@/widgets/nav-bar';

type RequestPage = {
  params: {
    id: string;
  };
};

const RequestsPage: React.FC<RequestPage> = ({ params: { id } }) => {
  return (
    <BaseLayout headerSlot={<Header />}>
      <Container maxW="6xl">
        <NavBar title={`Заказ #${id}`} />
        <VStack mt={10} mb={10} spacing={10}>
          <RequestsFilter />
          <RequestsList />
        </VStack>
      </Container>
    </BaseLayout>
  );
};

export default RequestsPage;
