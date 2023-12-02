import { RequestFilterOption } from '../types';

type Statuses = '' | 'on_check' | 'approved' | 'rejected';

export const requestFiltersOptions: RequestFilterOption<Statuses>[] = [
  {
    label: 'На проверке',
    value: 'on_check',
  },
  {
    label: 'Одобрено',
    value: 'approved',
  },
  {
    label: 'Отклонено',
    value: 'rejected',
  },
];

export const DEFAULT_STATUS: Statuses = '';
