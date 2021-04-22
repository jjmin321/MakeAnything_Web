import axios, { AxiosInstance } from 'axios';
import { checkJwt,checkJwtHandle } from './checkJwt';
import  {SERVER} from "../config/config.json"

export const SERVER_ADDRESS = SERVER

const customAxios: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`
});

customAxios.interceptors.request.use(checkJwt,checkJwtHandle);

export {customAxios}