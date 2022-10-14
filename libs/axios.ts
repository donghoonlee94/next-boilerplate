import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache',
  Expires: '0',
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: DEFAULT_HEADERS,
});

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  (err) => Promise.reject(err),
);

api.interceptors.response.use(
  (res: AxiosResponse) => {
    return res;
  },
  (err) => Promise.reject(err),
);

export default api;
