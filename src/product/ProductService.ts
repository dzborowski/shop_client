import {ApiService} from "../api/ApiService";
import {IProduct} from "./IProduct";

export class ProductService {
    public static async getProducts():Promise<IProduct[]> {
        const productsResponse = await ApiService.api.get("/products");

        return productsResponse.data as IProduct[];
    }
}
