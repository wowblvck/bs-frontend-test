import axios from 'axios';
import { LOCAL_API_URL } from '@/shared/config';

export const apiInstance = axios.create({
  baseURL: LOCAL_API_URL,
});
