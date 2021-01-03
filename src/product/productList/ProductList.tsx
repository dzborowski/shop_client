import React from "react";
import {ProductCart} from "../productCart/ProductCart";
import "./ProductList.scss";
import {ProductService} from "../ProductService";
import {IProduct} from "../IProduct";

interface IProps {}

interface IState {
    products:IProduct[]
}

export class ProductList extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props);

        this.state = {
            products: [],
        };
    }

    public async componentDidMount() {
        const products = await ProductService.getProducts();
        this.setState({products});
    }

    public render() {
        return (
            <div className={"ProductList"}>
                {this.state.products.map((product) => <ProductCart key={product.id} product={product}/>)}
            </div>
        );
    }
}
