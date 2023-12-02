'use client';

import React from 'react';
import { Box, Button, Select, Stack, Icon } from '@chakra-ui/react';
import { DEFAULT_STATUS, requestFiltersOptions } from '../config';
import { IoChevronDown } from 'react-icons/io5';

export const RequestsFilter = () => {
  const [value, setValue] = React.useState<string>(DEFAULT_STATUS);

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return (
    <Box bg="white" w="full" p={4} borderRadius={20}>
      <Stack
        spacing={5}
        direction={{ base: 'column', md: 'row' }}
        alignItems="center"
      >
        <Select
          icon={<Icon as={IoChevronDown} />}
          iconSize="0.9rem"
          maxW={{ base: 'full', md: '250px' }}
          variant="bsStyle"
          cursor="pointer"
          placeholder="Выберите статус"
          onChange={handleSelect}
          {...(value === DEFAULT_STATUS && { color: 'gray' })}
        >
          {requestFiltersOptions.map((option) => (
            <option
              key={option.value}
              value={option.value}
              style={{ color: 'black' }}
            >
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
