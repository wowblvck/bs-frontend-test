export type Status = 'on_check' | 'approved' | 'rejected';

export type Statistics = {
  id: number;
  users: number;
  views: number;
  male: number;
  female: number;
};

export type RequestInfo = {
  id: string;
  logo: string;
  title: string;
  group: string;
  status: Status;
  price: number;
  stats: Statistics;
  tags: {
    [x: string]: string[];
  };
  statisticsId: number;
};

export type RequestsData = {
  data: RequestInfo[];
  totalCount: number;
};
