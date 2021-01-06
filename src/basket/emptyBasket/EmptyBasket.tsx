import {RouteComponentProps, withRouter} from "react-router";
import React from "react";
import {Button} from "react-bootstrap";
import "./EmptyBasket.scss";

interface IProps extends RouteComponentProps {}

export const EmptyBasket = withRouter(class InnerEmptyBasket extends React.Component<IProps> {
    public render() {
        return (
            <div className={"EmptyBasket"}>
                <h3>Koszyk jest pusty</h3>
                <Button onClick={() => {
                    this.props.history.push("/products");
                }}>
                    Wróć do zakupów
                </Button>
            </div>
        );
    }
});
