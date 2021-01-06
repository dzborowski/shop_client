import {BasketItem} from "./BasketItem";
import {ApiService} from "../api/ApiService";

export class BasketService {
    public static async addProductToBasket(productId:string, productQuantity:number):Promise<BasketItem> {
        const addProductToBasketResponse = await ApiService.api.post("/basket", {
            productId,
            productQuantity,
        });

        return addProductToBasketResponse.data as BasketItem;
    }

    public static async removeItemFromBasket(basketItemId:string) {
        await ApiService.api.delete(`/basket/${basketItemId}`);
    }

    public static async getItemsInBasket():Promise<BasketItem[]> {
        const getProductsInBasketResponse = await ApiService.api.get("/basket");

        return getProductsInBasketResponse.data as BasketItem[];
    }
}
