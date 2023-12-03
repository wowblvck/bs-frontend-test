export type Status = 'on_check' | 'approved' | 'rejected';

export type Statistics = {
  users: number;
  views: number;
  male: number;
  female: number;
};

export type RequestData = {
  id: string;
  title: string;
  group: string;
  status: Status;
  price: number;
  statistics: Statistics;
  tags: string[];
};
