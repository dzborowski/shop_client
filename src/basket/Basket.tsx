import React from "react";
import {AuthContext} from "../auth/AuthContext";
import {IAuthContext} from "../auth/IAuthContext";
import {Redirect, RouteComponentProps, withRouter} from "react-router";
import {Button, Table} from "react-bootstrap";
import {BasketItem} from "./BasketItem";
import {BasketService} from "./BasketService";
import {IProduct} from "../product/IProduct";
import {ProductService} from "../product/ProductService";
import {EmptyBasket} from "./emptyBasket/EmptyBasket";
import "./Baset.scss";
import {OrderService} from "../account/orders/OrderService";

interface IProps extends RouteComponentProps {}

interface IState {
    items:BasketItem[];
    products:IProduct[];
}


export const Basket = withRouter(class InnerBasket extends React.Component<IProps, IState> {
    public static contextType = AuthContext;

    constructor(props:IProps) {
        super(props);

        this.state = {
            items: [],
            products: [],
        };
    }

    public async componentDidMount() {
        const items = await BasketService.getItemsInBasket();
        const products = await ProductService.getProducts();

        this.setState({items, products});
    }

    protected get authContext():IAuthContext {
        return this.context as IAuthContext;
    }

    protected removeItemFromBasket = async (basketItemId:string) => {
        await BasketService.removeItemFromBasket(basketItemId);
        const items = await BasketService.getItemsInBasket();
        this.setState({items});
    }

    protected getItemsInBasketPrice():number {
        return this.state.items.reduce((price, item) => {
            const product = this.state.products.find((product) => product.id === item.productId);
            if (product) {
                return price + item.quantity * Number.parseFloat(product.price);
            }

            return price;
        }, 0);
    }

    protected createOrder = async () => {
        await OrderService.createOrder();
        this.props.history.push("/account");
    }

    public render() {
        if (!this.authContext.isLoggedIn()) {
            return <Redirect to="/" />;
        }

        if (!this.state.items.length) {
            return <EmptyBasket />;
        }

        return (
            <div className={"Basket"}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produkt</th>
                            <th>Ilość</th>
                            <th>Cena za sztukę</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item) => {
                            const product = this.state.products.find((product) => product.id === item.productId);

                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{product?.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>{product?.price}</td>
                                    <td>
                                        <Button onClick={() => {
                                            this.removeItemFromBasket(item.id);
                                        }}>
                                            Usuń z koszyka
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <div className={"data"}>
                    <div>Suma: {this.getItemsInBasketPrice()}</div>
                </div>

                <div className={"actions"}>
                    <Button onClick={this.createOrder}>Złóż zamówienie</Button>
                </div>
            </div>
        );
    }
});
