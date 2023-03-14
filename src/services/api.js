import axios from 'axios'
import { getToken } from '../storage/utils'


const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL
});

api.interceptors.request.use(async config => {
    const token =  getToken();
    if(token) config.headers.token = token;

    return config;
});

export default api;