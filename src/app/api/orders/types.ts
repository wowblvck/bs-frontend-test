export type Status = 'on_check' | 'approved' | 'rejected';

export type Statistics = {
  users: number;
  views: number;
  male: number;
  female: number;
};

export type RequestData = {
  id: string;
  logo: string;
  title: string;
  group: string;
  status: Status;
  price: number;
  stats: Statistics;
  tags: string[][];
};
