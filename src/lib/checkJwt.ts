import { AxiosError, AxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';
import * as jwt from 'jsonwebtoken';
import { SERVER_ADDRESS } from './customAxios';
import axios from "axios"

export const checkJwt = async (config: AxiosRequestConfig) => {
    let accessToken = cookies.get('accessToken');
    let refreshToken = cookies.get('refreshToken');

    const nowDate = new Date().getTime() / 1000;

    if (accessToken || refreshToken) {
        const decode: any = jwt.decode(accessToken);

        if ((!accessToken && refreshToken) || 
        (refreshToken && decode && decode.exp < nowDate)) {
            const { data } = await axios.get(`${SERVER_ADDRESS}/user/token?refreshToken=${refreshToken}`);
            cookies.set('accessToken', data.data);
            accessToken = data.data
        }
    }

    if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
}

export const checkJwtHandle = (error: AxiosError) => {
    console.log("refreshToken 만료")
}