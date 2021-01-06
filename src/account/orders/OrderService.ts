import {ApiService} from "../../api/ApiService";
import {IOrder} from "./order/IOrder";

export class OrderService {
    public static async createOrder() {
        await ApiService.api.post("/order");
    }

    public static async getOrders():Promise<IOrder[]> {
        const getOrdersResponse = await ApiService.api.get("/order");

        return getOrdersResponse.data as IOrder[];
    }

    public static async getOrder(orderId:string):Promise<IOrder> {
        const getOrderResponse = await ApiService.api.get(`/order/${orderId}`);

        return getOrderResponse.data as IOrder;
    }
}
