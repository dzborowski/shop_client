import {ApiService} from "../../api/ApiService";

export class OrderService {
    public static async createOrder() {
        await ApiService.api.post("/order");
    }
}
