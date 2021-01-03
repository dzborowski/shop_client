import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Header.scss";
import {RouteComponentProps, withRouter} from "react-router";
import {AuthContext} from "../../auth/AuthContext";
import {IAuthContext} from "../../auth/IAuthContext";

export const Header = withRouter(class InnerHeader extends React.Component<RouteComponentProps> {
    public static contextType = AuthContext;

    protected getBasketLink():React.ReactNode {
        if (!this.authContext.isLoggedIn()) {
            return null;
        }

        return (
            <Nav.Link onClick={() => {
                this.props.history.push("/basket");
            }}>
            Koszyk
            </Nav.Link>
        );
    }

    protected getLoggedInUserAvailableActions():React.ReactNode {
        return (
            <NavDropdown
                title={`${this.authContext.loggedUser?.firstName} ${this.authContext.loggedUser?.lastName}`}
                id="collasible-nav-dropdown"
            >
                <NavDropdown.Item onClick={() => {
                    this.props.history.push("/account");
                }}>
                    Moje konto
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => {
                    this.authContext.logout();
                    this.props.history.push("/");
                }}>
                    Wyloguj się
                </NavDropdown.Item>
            </NavDropdown>
        );
    }

    protected getLoggedOutUserAvailableActions():React.ReactNode {
        return (
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
        );
    }

    protected get authContext():IAuthContext {
        return this.context as IAuthContext;
    }

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
                            {this.getBasketLink()}
                            {this.authContext.isLoggedIn() ?
                                this.getLoggedInUserAvailableActions() :
                                this.getLoggedOutUserAvailableActions()
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
});
