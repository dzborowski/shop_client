import React from "react";
import {OrderService} from "../OrderService";
import {IOrder} from "./IOrder";
import {RouteComponentProps, withRouter} from "react-router";
import {Table} from "react-bootstrap";
import "./Order.scss";

interface IProps extends RouteComponentProps<{orderId:string}> {}

interface IState {
    order: IOrder | null;
}

export const Order = withRouter(class InnerOrder extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);

        this.state = {
            order: null,
        };
    }

    public async componentDidMount() {
        const orderId = this.props.match.params.orderId;
        const order = await OrderService.getOrder(orderId);
        this.setState({order});
    }

    public render() {
        const {order} = this.state;

        if (!order) {
            return null;
        }

        return (
            <div className={"Order"}>
                <h5>Zamówienie: {order.id}</h5>
                <h6>Opłacone : {order.isPaid ? "Tak": "Nie"}</h6>
                <h6>Data stworzenia: {new Date(order.createdAt).toLocaleString()}</h6>

                <h6 className={"products-title"}>Produkty:</h6>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Produkt</th>
                            <th>Ilość</th>
                            <th>Cena za sztukę</th>
                        </tr>
                    </thead>
                    <tbody>
                        {order.orderedItems?.map((orderedItem) => (
                            <tr key={orderedItem.id}>
                                <td>{orderedItem.id}</td>
                                <td>{orderedItem.product.name}</td>
                                <td>{orderedItem.quantity}</td>
                                <td>{orderedItem.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
});
