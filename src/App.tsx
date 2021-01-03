import React from "react";
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import {Header} from "./common/header/Header";
import {Login} from "./auth/Login";
import {Register} from "./auth/Register";
import {Account} from "./account/Account";
import {ProductList} from "./product/productList/ProductList";
import {ProductCart} from "./product/productCart/ProductCart";
import "./App.scss";

export function App() {
    return (
        <div className={"App"}>
            <Router>
                <Header/>
                <div className={"content"}>
                    <Switch>
                        <Route path="/login">
                            <Login/>
                        </Route>
                        <Route path="/register">
                            <Register/>
                        </Route>
                        <Route path="/account">
                            <Account/>
                        </Route>
                        <Route path="/products">
                            <ProductList/>
                        </Route>
                        <Route path="/products/:productId">
                            <ProductCart/>
                        </Route>
                        <Route path="/">
                            <Account/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}
