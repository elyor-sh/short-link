import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import {toast} from "react-toastify";

import {BASE_API_URL as BASE_URL} from "./api.config";


export const httpRequestAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

export const httpRequest = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json; charset=utf-8',
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
});

// Request interceptor for API calls
httpRequestAuth.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'AuthResReqError'
        })
        return Promise.reject(error);
    },
);

// Response interceptor for API calls
httpRequestAuth.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'ReqError'
        })
        return Promise.reject(error);
    },
);

// Request interceptor for API calls
httpRequest.interceptors.request.use(
    async (config: AxiosRequestConfig) => {
        const token = await localStorage.getItem('token');
        if (config.headers) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'ReqError'
        })
        return Promise.reject(error);
    },
);

// Response interceptor for API calls
httpRequest.interceptors.response.use(
    (response) => {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        if ((error.response.status === 401 || error.response.status === 403) && (typeof originalRequest._retry === 'undefined' || !originalRequest._retry)) {
            localStorage.clear()
            window.location.replace('/')
        }

        toast.error(error?.response?.data?.message ? error?.response?.data?.message : 'Неопределенная ошибка', {
            toastId: 'ResError'
        })
        return Promise.reject(error.response);
    },
)