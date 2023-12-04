import { BaseLayout } from '@/layouts';
import { Header } from '@/widgets/header';
import { Container, VStack } from '@chakra-ui/react';
import React from 'react';
import { RequestsFilter } from '@/features/requests-filter';
import { RequestsList } from '@/entities/requests';
import { NavBar } from '@/widgets/nav-bar';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { localApi } from '@/shared/api';

type RequestPage = {
  params: {
    id: string;
  };
};

const RequestsPage: React.FC<RequestPage> = async ({ params: { id } }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['requests', 1],
    queryFn: () => localApi.getRequests({ offset: 1, limit: 10 }),
  });

  return (
    <BaseLayout headerSlot={<Header />}>
      <Container maxW="6xl">
        <NavBar title={`Заказ #${id}`} />
        <VStack mt={10} mb={10} spacing={10}>
          <RequestsFilter />
          <HydrationBoundary state={dehydrate(queryClient)}>
            <RequestsList />
          </HydrationBoundary>
        </VStack>
      </Container>
    </BaseLayout>
  );
};

export default RequestsPage;
