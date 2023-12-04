'use client';

import React from 'react';
import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Pagination } from '@/shared/ui';
import { RequestsItem } from './requests-item';
import { useQuery } from '@tanstack/react-query';
import { localApi } from '@/shared/api';

export const RequestsList = () => {
  const { data: query } = useQuery({
    queryKey: ['requests', 1],
    queryFn: () => localApi.getRequests({ offset: 1, limit: 10 }),
  });

  return (
    <Stack w="full" spacing={[5, 10]}>
      <Box bg="white" w="full" p={4} borderRadius={25}>
        <VStack w="full">
          <VStack w="full" spacing={3}>
            {query?.data.map((item) => (
              <RequestsItem item={item} key={item.id} />
            ))}
          </VStack>
          <Pagination />
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
