import axios from "axios";
import {AppConfig} from "../app/AppConfig";

export class ApiService {
    public static api = axios.create({
        baseURL: AppConfig.getApiUrl(),
    })
}
