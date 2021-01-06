import axios, {AxiosInstance} from "axios";
import {AppConfig} from "../app/AppConfig";

export class ApiService {
    public static api:AxiosInstance

    public static init() {
        ApiService.api = axios.create({
            baseURL: AppConfig.getApiUrl(),
        });

        ApiService.api.interceptors.response.use((response) => response, (error) => {
            console.log("error:", (error));

            return Promise.reject(error);
        });
    }
}
