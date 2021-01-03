import React from "react";
import {Button, Card} from "react-bootstrap";
import "./ProductCart.scss";
import exampleProductPhoto from "./example_product_photo.jpg";

export class ProductCart extends React.Component {
    public render() {
        return (
            <Card className={"ProductCart"}>
                <Card.Img variant="top" src={exampleProductPhoto}/>
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button variant="primary">Dodaj do koszyka</Button>
                    <Button variant="success">Zobacz</Button>
                </Card.Footer>
            </Card>
        );
    }
}
