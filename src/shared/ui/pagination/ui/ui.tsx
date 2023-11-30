import React from 'react';
import { Center, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type PaginationProps = {
  current: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
};

export const Pagination = () => {
  return (
    <Stack
      w="full"
      justifyContent={['start', 'space-between']}
      alignItems="center"
      direction={['column', 'row']}
    >
      <Text>Страница: 1 из 1</Text>
      <HStack alignItems="end">
        <IconButton
          bg="gray.50"
          aria-label="Left page scroll"
          icon={<Icon as={MdChevronLeft} color="gray.400" boxSize={4} />}
        />
        <Center bg="gray.300" w={10} h={10} borderRadius={5}>
          <Text as="b">1</Text>
        </Center>
        <IconButton
          bg="gray.50"
          aria-label="Right page scroll"
          icon={<Icon as={MdChevronRight} color="gray.400" boxSize={4} />}
        />
      </HStack>
    </Stack>
  );
};
