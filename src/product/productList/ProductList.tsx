import React from "react";
import {ProductCart} from "../productCart/ProductCart";
import "./ProductList.scss";

export class ProductList extends React.Component {
    public render() {
        return (
            <div className={"ProductList"}>
                {new Array(10).fill(1).map((product, i) => {
                    return <ProductCart key={i}></ProductCart>;
                })}
            </div>
        );
    }
}
