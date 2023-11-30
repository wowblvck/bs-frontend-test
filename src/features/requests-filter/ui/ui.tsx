import React from 'react';
import { Box, Button, Select, Stack } from '@chakra-ui/react';
import { requestFiltersOptions } from '../config';

export const RequestsFilter = () => {
  return (
    <Box bg="white" w="full" p={4} borderRadius={20}>
      <Stack
        spacing={5}
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Select
          maxW={{ base: 'full', md: '250px' }}
          variant="outline"
          placeholder="Выберите статус"
        >
          {requestFiltersOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Button
          w="fit-content"
          whiteSpace={['normal', 'nowrap']}
          py={[3, 0]}
          h={['auto', 10]}
        >
          Выбрать к одобрению/отклонению
        </Button>
      </Stack>
    </Box>
  );
};
