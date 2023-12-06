import { useMutation } from '@tanstack/react-query';
import { localApi } from '@/shared/api';
import { useToast } from '@chakra-ui/react';
import { isAxiosError } from 'axios';

export const useAddRequest = () => {
  const toast = useToast();

  const { mutateAsync: addRequest } = useMutation({
    mutationFn: (id: string) => localApi.acceptRequest(id),
    onError: (error, id) => {
      if (isAxiosError(error)) {
        if (error.response?.status === 409) {
          toast({
            title: 'Отклонено',
            status: 'error',
            description: `Заявка c ID '${id}' была ранее одобрена!`,
          });
        }
      }
    },
  });

  return {
    addRequest,
  };
};
