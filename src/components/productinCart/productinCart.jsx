import React, { Component } from 'react';
import { connect } from "react-redux";
import { removeProductInCart } from "../../store/actions/actions";
import "./productinCart.css";


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
        return (
            <React.Fragment>
                <div id="cartDisplay">
                    <div id="imgDisplay">
                        <img src={"/images/products/" + this.props.data.product.image} id="cartImg" alt="" width="200px" height="200px"/>
                    </div>
                    <div id="cartMain">
                        <h2><b>{this.props.data.product.title}</b></h2>
                        <h3><b>Quantity: </b>{this.props.data.quantity}</h3>
                        <h5><b>Unit Price: </b>${this.props.data.product.price}</h5>
                    </div>
                    <div id="cartTotal">
                        <h5 id="displayTotal"><b>Item Total:</b> ${this.props.data.product.price * this.props.data.quantity}</h5>
                        <button onClick={this.removeClicked} className="btn btn-warning">Delete from Cart</button>
                    </div>
                </div>
            </React.Fragment> 
        );
    }

    // FINISH THIS TODAY

    removeClicked = () => {
        console.log('Remove Product Clicked!!');
        var productRemove = {
            product: this.props.data.product,
            quant: this.props.data.quantity
        };

        // call action function and dispatch request
        this.props.removeProductInCart(productRemove);
    }
}

export default connect(null, { removeProductInCart })(ProductinCart);