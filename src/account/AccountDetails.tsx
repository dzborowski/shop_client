import React from "react";
import {Col, Form} from "react-bootstrap";

export class AccountDetails extends React.Component {
    public render() {
        return (
            <div className={"AccountDetails"}>
                <fieldset disabled>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </fieldset>
            </div>
        );
    }
}
