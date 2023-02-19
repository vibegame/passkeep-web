import { API_URL } from '@app/config';
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: API_URL,
});
