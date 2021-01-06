import {IOrderedItem} from "./IOrderedItem";

export interface IOrder {
    id: string;
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
    orderedItems?: IOrderedItem[];
}
