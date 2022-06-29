import axios from 'axios';
import join from 'url-join';
import { requestHandler, successHandler, errorHandler } from "./interceptors";

const connectInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
        "Content-Type": "application/json"
    }
});

connectInstance.interceptors.request.use(async (request)=> {
    return requestHandler(request);
});

connectInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
);


export const httpRequest = connectInstance