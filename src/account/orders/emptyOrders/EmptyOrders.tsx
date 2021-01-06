import React from "react";
import "./EmptyOrders.scss";
import {RouteComponentProps, withRouter} from "react-router";
import {Button} from "react-bootstrap";

interface IProps extends RouteComponentProps {}

export const EmptyOrders = withRouter(class InnerEmptyOrders extends React.Component<IProps> {
    public render() {
        return (
            <div className={"EmptyOrders"}>
                <h3>Nie posiadasz nowych zamówień</h3>
                <Button onClick={() => {
                    this.props.history.push("/basket");
                }}>
                    Sprawdź koszyk
                </Button>
            </div>
        );
    }
});
