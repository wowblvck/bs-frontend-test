import { Button, Stack } from '@chakra-ui/react';
import { declension } from '@/shared/lib';
import React from 'react';

type RequestsSelectProps = {
  itemsCount: number;
  onReset: () => void;
  onSubmit: () => void;
};

export const RequestsSelect: React.FC<RequestsSelectProps> = ({
  onReset,
  itemsCount,
  onSubmit,
}) => {
  return (
    <Stack
      direction={['column-reverse', 'row']}
      alignItems={['center']}
      ml={['unset', 'auto']}
      spacing={5}
    >
      <Button variant="link" onClick={onReset}>
        Сбросить
      </Button>
      <Button colorScheme="bs" isDisabled={itemsCount === 0} onClick={onSubmit}>
        Выбрать {itemsCount}{' '}
        {declension(itemsCount, ['заявку', 'заявки', 'заявок'])}
      </Button>
    </Stack>
  );
};
