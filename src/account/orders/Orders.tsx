import React from "react";
import {Button, Table} from "react-bootstrap";
import {IOrder} from "./order/IOrder";
import {EmptyOrders} from "./emptyOrders/EmptyOrders";
import {OrderService} from "./OrderService";
import {RouteComponentProps, withRouter} from "react-router";

interface IProps extends RouteComponentProps {}

interface IState {
    orders: IOrder[];
}

export const Orders = withRouter(class InnerOrders extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);

        this.state = {
            orders: [],
        };
    }

    public async componentDidMount() {
        const orders = await OrderService.getOrders();
        this.setState({orders});
    }

    public render() {
        if (!this.state.orders.length) {
            return <EmptyOrders/>;
        }

        return (
            <div className={"Orders"}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Opłacone</th>
                            <th>Data stworzenia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.isPaid ? "Tak": "Nie"}</td>
                                <td>{new Date(order.createdAt).toLocaleString()}</td>
                                <td>
                                    <Button onClick={() => {
                                        this.props.history.push(`/orders/${order.id}`);
                                    }}>
                                        Zobacz szczegóły
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
});
