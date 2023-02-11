import { API_URL } from '@app/config';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: API_URL,
});

export default apiClient;
