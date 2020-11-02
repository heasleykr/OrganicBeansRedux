import React, { Component } from 'react';
import { addProductToCart } from "../../store/actions/actions";

class ProductinCart extends Component {
    state = {};
    /** Render:
     * Image
     * Title
     * quantity
     * Total
     * Button to delete from cart array EXTRA HOMEWORK
     *      create action 'REMOVE_PRODUCT'
     *      dispatch action
     *      implement the reducer
     */
    render(){
        return <div>
            <h1>{this.props.data.product.title}: {this.props.data.quantity}</h1>
            <button onClick={this.removeClicked} className="btn btn-warning">Delete from Cart</button>

            </div>;
    }

    // FINISH THIS TODAY

    removeClicked = () => {
        console.log('Remove Product Clicked!!');

        // 'this.props.data' is our Product Object from Catalog.js
        // Grab the product Object and the quantity the user selected. Make a new Object of those to send to Store. 
        const addedProduct = {
            product: this.props.data,
            quantity: this.state.amount
        };

        // Now call our action function and dispatch request 
        this.props.addProductToCart(addedProduct);
    }
}

export default ProductinCart;