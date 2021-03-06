import React from "react";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import "./ProductCart.scss";
import exampleProductPhoto from "./example_product_photo.jpg";
import {IProduct} from "../IProduct";
import {AuthContext} from "../../auth/AuthContext";
import {IAuthContext} from "../../auth/IAuthContext";
import {BasketService} from "../../basket/BasketService";

interface IProps {
    product:IProduct
}

export class ProductCart extends React.Component<IProps> {
    public static contextType = AuthContext;

    protected get authContext():IAuthContext {
        return this.context as IAuthContext;
    }

    protected addProductToBasket = async () => {
        await BasketService.addProductToBasket(this.props.product.id, 1);
        alert("Produkt został dodany do koszyka");
    }

    public render() {
        const {product} = this.props;

        return (
            <Card className={"ProductCart"}>
                <Card.Img variant="top" src={exampleProductPhoto}/>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Cena: {product.price} zł</ListGroupItem>
                    <ListGroupItem>Dostępna ilość: {product.availableCopiesQuantity}</ListGroupItem>
                </ListGroup>

                {this.authContext.isLoggedIn() ?
                    <Card.Footer>
                        <Button
                            variant="primary"
                            onClick={this.addProductToBasket}
                            disabled={!this.props.product.availableCopiesQuantity}>
                            Dodaj do koszyka
                        </Button>
                        {/* <Button variant="success">Zobacz</Button>*/}
                    </Card.Footer>:
                    null
                }
            </Card>
        );
    }
}
