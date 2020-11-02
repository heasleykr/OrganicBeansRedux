import React, { Component } from 'react';
import { connect } from "react-redux";
import "./cart.css";

// Import your Redux Actions
import { incrementCartCounter } from '../../store/actions/actions';
import ProductinCart from '../productinCart/productinCart';




class Cart extends Component{
    state = {
        emailVisible: false
    }

    render(){
        return(
        <div className="jumbotron">
            <h1 className="display-4">Your Grocery Cart</h1>
                {this.props.cart.map((p) => <ProductinCart data={p} key={p.product.id}></ProductinCart>)}
        </div>
        );
   
    }

    onBtnClicked = () => {
        //Update state, Toggle the opposite
        console.log("Button Clicked")
        this.props.incrementCartCounter();
    }

}

// Grab state properties to use with our Component
const mapStateToProps = (state) => {
    return {
        cart: state.cart //cart is an array in props
    }
};

// connect to the store
export default connect(mapStateToProps, { incrementCartCounter })(Cart);