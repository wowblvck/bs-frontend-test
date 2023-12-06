'use client';

import React from 'react';
import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Pagination } from '@/shared/ui';
import { RequestsItem } from './requests-item';
import { useAddRequest, useGetRequests, useSelectRequests } from '../lib';
import { declension } from '@/shared/lib';
import { useQueryClient } from '@tanstack/react-query';

export const RequestsList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState<number>(1);

  const { ids, itemsCount, resetRequests, isRequestExist, onSelect } =
    useSelectRequests([]);

  const { data: query, isPlaceholderData } = useGetRequests(page);

  const { addRequest } = useAddRequest();

  const handleSubmit = async () => {
    await Promise.allSettled(ids.map((id) => addRequest(id))).then(() =>
      queryClient
        .invalidateQueries({ queryKey: ['requests'] })
        .then(() => resetRequests())
    );
  };

  return (
    <Stack w="full" spacing={[5, 10]}>
      <Box bg="white" w="full" p={4} borderRadius={25}>
        <VStack w="full">
          <VStack w="full" spacing={3}>
            {query?.data.map((item) => (
              <RequestsItem
                item={item}
                key={item.id}
                isSelected={isRequestExist(item)}
                onSelectItem={(item) => onSelect(item)}
              />
            ))}
          </VStack>
          <Pagination
            currentPage={page}
            pageSize={10}
            total={query?.totalCount || 1}
            onPrevPage={() => {
              setPage((prevPage) => prevPage - 1);
            }}
            onNextPage={() => {
              if (!isPlaceholderData && query?.data) {
                setPage((prevPage) => prevPage + 1);
              }
            }}
          />
        </VStack>
      </Box>
      <Stack
        direction={['column-reverse', 'row']}
        alignItems={['center']}
        ml={['unset', 'auto']}
        spacing={5}
      >
        <Button variant="link" onClick={resetRequests}>
          Сбросить
        </Button>
        <Button
          colorScheme="bs"
          isDisabled={itemsCount === 0}
          onClick={handleSubmit}
        >
          Выбрать {itemsCount}{' '}
          {declension(itemsCount, ['заявку', 'заявки', 'заявок'])}
        </Button>
      </Stack>
    </Stack>
  );
};
