import React from "react";
import {Col, Form} from "react-bootstrap";
import {AuthContext} from "../auth/AuthContext";
import {IAuthContext} from "../auth/IAuthContext";

export class AccountDetails extends React.Component {
    public static contextType = AuthContext;

    protected get authContext():IAuthContext {
        return this.context as IAuthContext;
    }

    public render() {
        const loggedUser = this.authContext.loggedUser;

        return (
            <div className={"AccountDetails"}>
                <fieldset disabled>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>Imię</Form.Label>
                                <Form.Control value={loggedUser?.firstName}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control value={loggedUser?.lastName}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={loggedUser?.email}/>
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </fieldset>
            </div>
        );
    }
}
