import axios from 'axios';
import { getUserFromLocalStorage } from './localStorage';

const api = axios.create({
  baseURL: 'https://evening-reaches-97077.herokuapp.com',
});

api.interceptors.request.use((config) => {
  const user = getUserFromLocalStorage();
  if (user) {
    config.headers.common['Authorization'] = `Bearer ${user.token}`;
  }
  return config;
});

export default api;
