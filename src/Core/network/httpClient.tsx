import axios from 'axios';
import { injectable } from 'tsyringe';

export interface IHttpClient {
    get: (url: string) => Promise<Response>,
    post: (url: string, payload: string) => Promise<Response>
}

@injectable()
export class AxiosClient implements IHttpClient {
    async get(url: string) {
        const response = await axios.get(url);
        return response.data;
    }

    async post(url: string, payload: string) {
        const response = await axios.post(url, payload)
        return response.data
    }
}