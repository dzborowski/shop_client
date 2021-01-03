import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Header.scss";
import {RouteComponentProps, withRouter} from "react-router";

export const Header = withRouter(class InnerHeader extends React.Component<RouteComponentProps> {
    public render() {
        return (
            <div className={"Header"}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand onClick={() => {
                        this.props.history.push("/");
                    }}>
                        Sklep
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={() => {
                                this.props.history.push("/products");
                            }}>
                                Produkty
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => {
                                this.props.history.push("/basket");
                            }}>
                                Koszyk
                            </Nav.Link>
                            <NavDropdown title="Konto" id="collasible-nav-dropdown">
                                <NavDropdown.Item onClick={() => {
                                    this.props.history.push("/login");
                                }}>
                                    Zaloguj się
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => {
                                    this.props.history.push("/register");
                                }}>
                                    Zarejestruj się
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
});
