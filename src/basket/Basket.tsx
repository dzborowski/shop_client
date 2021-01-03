import React from "react";
import {AuthContext} from "../auth/AuthContext";
import {IAuthContext} from "../auth/IAuthContext";
import {Redirect} from "react-router";

export class Basket extends React.Component {
    public static contextType = AuthContext;

    protected get authContext():IAuthContext {
        return this.context as IAuthContext;
    }

    public render() {
        if (!this.authContext.isLoggedIn()) {
            return <Redirect to="/" />;
        }

        return "Basket";
    }
}
