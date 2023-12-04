import { apiInstance } from './base';
import { RequestsData, RequestInfo } from './models';

const BASE_URL = '/api/orders';

type GetRequestsParams = {
  offset: number;
  limit: number;
};

export const getRequests = async (
  params?: GetRequestsParams
): Promise<RequestsData> => {
  const res = await apiInstance.get<RequestInfo[]>(BASE_URL, { params });
  const totalCount = res.headers['x-total-count'];
  return {
    data: res.data,
    totalCount: totalCount,
  };
};
