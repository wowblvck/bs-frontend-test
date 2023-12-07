import { apiInstance } from './base';
import { RequestInfo, RequestsData } from './models';

const BASE_URL = '/api/orders';

type GetRequestsParams = {
  offset: number;
  limit: number;
};

export const getRequests = async (
  params?: GetRequestsParams
): Promise<RequestsData> => {
  try {
    const res = await apiInstance.get<RequestInfo[]>(BASE_URL, { params });
    const totalCount = res.headers['x-total-count'];
    return {
      data: res.data,
      totalCount: Number(totalCount),
    };
  } catch (error) {
    throw 'Error';
  }
};

export const acceptRequest = async (id: string) => {
  const res = await apiInstance.put<RequestInfo>(`${BASE_URL}/${id}/accept`);
  return res.data;
};
