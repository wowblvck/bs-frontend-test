import React from 'react';
import { Center, HStack, IconButton, Stack, Text } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type PaginationProps = {
  currentPage: number;
  pageSize: number;
  total: number;
  onChange: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  total,
  pageSize,
  onChange,
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const goToNextPage = () =>
    currentPage !== totalPages && onChange(currentPage + 1);

  const goToPrevPage = () => currentPage !== 1 && onChange(currentPage - 1);

  return (
    <Stack
      w="full"
      justifyContent={['start', 'space-between']}
      alignItems="center"
      direction={['column', 'row']}
    >
      <Text>
        Страница: {currentPage} из {totalPages}
      </Text>
      <HStack alignItems="end">
        <IconButton
          isDisabled={currentPage === 1}
          onClick={goToPrevPage}
          bg="gray.50"
          aria-label="Left page scroll"
          icon={<Icon as={MdChevronLeft} color="gray.400" boxSize={4} />}
        />
        <Center bg="gray.300" w={10} h={10} borderRadius={5}>
          <Text as="b">{currentPage}</Text>
        </Center>
        <IconButton
          isDisabled={currentPage === totalPages}
          onClick={goToNextPage}
          bg="gray.50"
          aria-label="Right page scroll"
          icon={<Icon as={MdChevronRight} color="gray.400" boxSize={4} />}
        />
      </HStack>
    </Stack>
  );
};
