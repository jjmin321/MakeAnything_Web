import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';
import { checkJwt } from './checkJwt';

const SERVER_ADDRESS = "http://localhost:8080"

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
  headers: {
    access_token: cookies.get('access_token'),
  },
});

customAxios.interceptors.request.use(checkJwt);