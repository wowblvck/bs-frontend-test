import React from 'react';
import { Box, Button, Stack, VStack } from '@chakra-ui/react';
import { Pagination } from '@/shared/ui';
import { RequestsItem } from './requests-item';

export const RequestsList = () => {
  return (
    <Stack w="full" spacing={[5, 10]}>
      <Box bg="white" w="full" p={4} borderRadius={25}>
        <VStack w="full">
          <VStack w="full" spacing={3}>
            {Array.from({ length: 10 }).map((item, idx) => (
              <RequestsItem key={idx} />
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
