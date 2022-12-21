import axios from 'axios';
import { BASE_URL, TIMEOUT } from './config';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return err;
  }
);

export default instance;
