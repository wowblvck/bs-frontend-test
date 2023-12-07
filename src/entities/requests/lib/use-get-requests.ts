import { localApi } from '@/shared/api';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

export const useGetRequests = (page: number) => {
  const { data, isPlaceholderData, isError, error, isLoading } = useQuery({
    queryKey: ['requests', page],
    queryFn: () => localApi.getRequests({ offset: page, limit: 10 }),
    placeholderData: keepPreviousData,
  });

  return {
    data,
    isEmpty: data === undefined || data?.totalCount === 0,
    isLoading,
    isPlaceholderData,
    isError,
    error,
  };
};
