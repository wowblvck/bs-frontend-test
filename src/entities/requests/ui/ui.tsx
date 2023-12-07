'use client';

import React from 'react';
import { Box, Center, Stack, VStack, Text, Spinner } from '@chakra-ui/react';
import { Pagination } from '@/shared/ui';
import { RequestsItem } from './requests-item';
import { RequestsSelect } from './requests-select';
import { useAddRequest, useGetRequests, useSelectRequests } from '../lib';
import { useQueryClient } from '@tanstack/react-query';

export const RequestsList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState<number>(1);

  const { ids, itemsCount, resetRequests, isRequestExist, onSelect } =
    useSelectRequests([]);

  const {
    data: requests,
    isPlaceholderData,
    isLoading,
    isError,
    isEmpty,
  } = useGetRequests(page);

  const { addRequest } = useAddRequest();

  const handleSubmit = async () => {
    await Promise.allSettled(ids.map((id) => addRequest(id))).then(() =>
      queryClient
        .invalidateQueries({ queryKey: ['requests'] })
        .then(() => resetRequests())
    );
  };

  const loadingEffect = () => (
    <Center p={4}>
      <Spinner />
    </Center>
  );

  const notFountEffect = () => (
    <Center p={4}>
      <Text>Заявки не найдены!</Text>
    </Center>
  );

  const errorEffect = () => (
    <Center p={4}>
      <Text>Произошла ошибка во время загрузки!</Text>
    </Center>
  );

  const renderRequests = () =>
    requests?.data.map((item) => (
      <RequestsItem
        item={item}
        key={item.id}
        isSelected={isRequestExist(item)}
        onSelectItem={(item) => onSelect(item)}
      />
    ));

  //TODO: Отрефакторить компонент (громоздкий и много тернарных операторов)
  return (
    <Stack w="full" spacing={[5, 10]}>
      <Box bg="white" w="full" p={4} borderRadius={25}>
        {isLoading ? (
          loadingEffect()
        ) : isError ? (
          errorEffect()
        ) : isEmpty ? (
          notFountEffect()
        ) : (
          <VStack w="full">
            <VStack w="full" spacing={3}>
              {renderRequests()}
            </VStack>
            <Pagination
              currentPage={page}
              pageSize={10}
              total={requests?.totalCount || 1}
              onPrevPage={() => {
                setPage((prevPage) => prevPage - 1);
              }}
              onNextPage={() => {
                if (!isPlaceholderData) {
                  setPage((prevPage) => prevPage + 1);
                }
              }}
            />
          </VStack>
        )}
      </Box>
      {!isEmpty && (
        <RequestsSelect
          itemsCount={itemsCount}
          onReset={resetRequests}
          onSubmit={handleSubmit}
        />
      )}
    </Stack>
  );
};
