import React from "react";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./Header.scss";

export class Header extends React.Component {
    public render() {
        return (
            <div className={"Header"}>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">Sklep</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#features">Produkty</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">Koszyk</Nav.Link>
                            <NavDropdown title="Konto" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Zaloguj się</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Zarejestruj się</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
