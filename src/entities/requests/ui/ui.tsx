'use client';

import React from 'react';
import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Pagination } from '@/shared/ui';
import { RequestsItem } from './requests-item';
import { useQuery } from '@tanstack/react-query';
import { localApi } from '@/shared/api';
import { SkeletonItem } from './skeleton-item';

export const RequestsList = () => {
  const [page, setPage] = React.useState<number>(1);

  const { data: query, isLoading } = useQuery({
    queryKey: ['requests', page],
    queryFn: () => localApi.getRequests({ offset: page, limit: 10 }),
  });

  const handleChangePage = (page: number) => {
    setPage(page);
  };

  const skeletonLoaders = Array.from({ length: 10 }, (_, k) => (
    <SkeletonItem key={k} />
  ));

  return (
    <Stack w="full" spacing={[5, 10]}>
      <Box bg="white" w="full" p={4} borderRadius={25}>
        <VStack w="full">
          <VStack w="full" spacing={3}>
            {isLoading ? (
              skeletonLoaders
            ) : (
              <>
                {query?.data.map((item) => (
                  <RequestsItem item={item} key={item.id} />
                ))}
              </>
            )}
          </VStack>
          <Pagination
            currentPage={page}
            pageSize={10}
            total={query?.totalCount ?? 1}
            onChange={handleChangePage}
          />
        </VStack>
      </Box>
      <Stack
        direction={['column-reverse', 'row']}
        alignItems={['center']}
        ml={['unset', 'auto']}
        spacing={5}
      >
        <Button variant="link">Сбросить</Button>
        <Button colorScheme="bs">Выбрать 1 заявку</Button>
      </Stack>
    </Stack>
  );
};
