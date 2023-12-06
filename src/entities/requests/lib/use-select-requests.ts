import React from 'react';
import { RequestInfo } from '@/shared/api';

export const useSelectRequests = (defaultState: []) => {
  const [selectedRequests, setSelectedRequests] = React.useState<Set<string>>(
    () => new Set(defaultState)
  );

  const itemsCount = selectedRequests.size;

  const isRequestExist = React.useCallback(
    (item: RequestInfo) => selectedRequests.has(item.id),
    [selectedRequests]
  );

  const onSelect = React.useCallback(
    (item: RequestInfo) => {
      setSelectedRequests((prevState) => {
        const newMap = new Set(prevState);
        if (isRequestExist(item)) {
          newMap.delete(item.id);
        } else {
          newMap.add(item.id);
        }
        return newMap;
      });
    },
    [isRequestExist]
  );

  const resetRequests = React.useCallback(() => {
    if (selectedRequests.size > 0) {
      setSelectedRequests(new Set());
    }
  }, [selectedRequests]);

  return {
    ids: Array.from(selectedRequests),
    resetRequests,
    itemsCount,
    isRequestExist,
    onSelect,
  };
};
