import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "../common/header/Header";
import {Login} from "../auth/Login";
import {Register} from "../auth/Register";
import {Account} from "../account/Account";
import {ProductList} from "../product/productList/ProductList";
import "./App.scss";
import {Basket} from "../basket/Basket";
import {IAuthContext} from "../auth/IAuthContext";
import {ILoggedUser} from "../auth/ILoggedUser";
import {IAuthLoginTokens} from "../auth/IAuthLoginTokens";
import {AuthContext} from "../auth/AuthContext";


interface IProps {}

interface IState {
    authContext: IAuthContext;
}

export class App extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);

        this.state = {
            authContext: {
                loggedUser: null,
                authLoginTokens: null,
                setLoggedUser: this.setLoggedUser,
                setAuthLoginTokens: this.setAuthLoginTokens,
                isLoggedIn: this.isLoggedIn,
            },
        };
    }

    public setLoggedUser = (loggedUser:ILoggedUser) => {
        this.setState((state) => ({
            ...state,
            authContext: {
                ...state.authContext,
                loggedUser,
            },
        }));
    };

    public setAuthLoginTokens = (authLoginTokens: IAuthLoginTokens) => {
        this.setState((state) => ({
            ...state,
            authContext: {
                ...state.authContext,
                authLoginTokens,
            },
        }));
    };

    public isLoggedIn = () => {
        return !!this.state.authContext.loggedUser && !!this.state.authContext.authLoginTokens;
    };

    public render() {
        return (
            <div className={"App"}>
                <AuthContext.Provider value={this.state.authContext}>
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
                </AuthContext.Provider>
            </div>
        );
    }
}
