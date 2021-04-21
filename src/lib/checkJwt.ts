import { AxiosRequestConfig } from 'axios';
import cookies from 'js-cookie';
import * as jwt from 'jsonwebtoken';
import { customAxios } from './customAxios';

export const checkJwt = async (config: AxiosRequestConfig) => {
    let accessToken = cookies.get('accessToken');
    let refreshToken = cookies.get('refreshToken');
    const decode = jwt.decode(accessToken);
    const nowDate = new Date().getTime() / 1000;

    if (accessToken == null || decode.exp < nowDate) {
        const { data } = await customAxios.post('/refresh', { refreshToken });

        cookies.set('accessToken', data.data.accessToken);
    }

    config.headers['accessToken'] = accessToken;
    return config;
}