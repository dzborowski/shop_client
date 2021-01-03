import React from "react";
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import "./ProductCart.scss";
import exampleProductPhoto from "./example_product_photo.jpg";
import {IProduct} from "../IProduct";

interface IProps {
    product:IProduct
}

export class ProductCart extends React.Component<IProps> {
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
                <Card.Footer>
                    <Button variant="primary">Dodaj do koszyka</Button>
                    {/* <Button variant="success">Zobacz</Button>*/}
                </Card.Footer>
            </Card>
        );
    }
}
