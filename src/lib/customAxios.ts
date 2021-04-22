import axios, { AxiosInstance } from 'axios';
import cookies from 'js-cookie';
import { checkJwt,checkJwtHandle } from './checkJwt';

export const SERVER_ADDRESS = "http://localhost:8080"

const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`
});

customAxios.interceptors.request.use(checkJwt,checkJwtHandle);

export {customAxios}