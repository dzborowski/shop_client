import React from "react";
import {AccountDetails} from "./AccountDetails";
import {Orders} from "./orders/Orders";
import {Col, Nav, Row, Tab} from "react-bootstrap";

export class Account extends React.Component {
    public render() {
        return (
            <div className={"Account"}>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Dane osobowe</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Zamówienia</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>

                        <Col sm={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <AccountDetails/>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Orders/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
