import {IProduct} from "../../../product/IProduct";

export interface IOrderedItem {
    id: string;
    quantity: number;
    price: string;
    createdAt: Date;
    updatedAt: Date;
    product: IProduct;
}
