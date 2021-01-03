import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "../common/header/Header";
import {Login} from "../auth/Login";
import {Register} from "../auth/Register";
import {Account} from "../account/Account";
import {ProductList} from "../product/productList/ProductList";
import "./App.scss";
import {IUser} from "../auth/IUser";
import {IAuthLoginTokens} from "../auth/IAuthLoginTokens";
import {Basket} from "../basket/Basket";

interface IAuthContext {
    user: IUser | null;
    authLoginTokens: IAuthLoginTokens | null;
}

const authContext = React.createContext<IAuthContext>({
    user: null,
    authLoginTokens: null,
});

interface IProps {}
interface IState extends IAuthContext {}

export class App extends React.Component<IProps, IState> {
    public render() {
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
                            {/* <Route path="/products/:productId">*/}
                            {/*    <ProductCart/>*/}
                            {/* </Route>*/}
                            <Route path="/basket">
                                <Basket/>
                            </Route>
                            <Route path="/">
                                <ProductList/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}
