import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';
import { checkJwt } from './checkJwt';

const SERVER_ADDRESS = "http://localhost:8080"

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
  headers: {
    Authorization: `Bearer ${cookies.get('accessToken')}`,
  },
});

customAxios.interceptors.request.use(checkJwt);