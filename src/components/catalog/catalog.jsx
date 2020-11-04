import React, { Component } from 'react';
import Product from '../product/product';
import "./catalog.css";
import ProductService from '../../services/productService';



class Catalog extends Component{

    state = {
        products: [],
        catagories: [],
        selectedCategory: ''
    };
    
    //For each product in the array of data, return a Product!
    /* 
        - When you render a Component, they need to have a unique key for React to work with. p.id for key
        - Send data to the Product Obj/Component to display 'data={p}'
    */
    render() {

        let prodsToDisplay = this.state.products;

        //filter the prodsToDisplay
        /* 
            If selecteCtegory is not '', then filter
            filters return t/f. T returns the element
        */
        if(this.state.selectedCategory !== ''){
            prodsToDisplay = prodsToDisplay.filter((prods) => prods.category === this.state.selectedCategory);
        }

        return (
            <div className="catalog-page">
                
                <div className="catagories">
                <div className="searchCategories">
                    <h4 className="shopLabel">Sort By</h4>
                    <h2 id="catTitle" className="categoryTitle"><b>Categories</b></h2>
                </div>

                <div id="buttons">
                    <button 
                        onClick={() => this.selectCategory('')}
                        key = {''}
                        id="buttonAll">All Products
                    </button>


                        { this.state.catagories.map((c) => 
                            <button 
                                onClick={() => this.selectCategory(c)} id="buttonC">{c}
                            </button>)}
                </div>
                </div>

                <div>
                    <div className="searchCategories">
                        <h4 className="shopLabel">Shop By</h4>
                        <h3 className="categoryTitle">Featured Products</h3>
                    </div>
                    {prodsToDisplay.map((p) => <Product data={p} key={p.id}></Product>)} 
                </div>
            </div>
        );
    }

    selectCategory = (cat) => {
        this.setState({selectedCategory: cat});
    }
    
    /*Life Cycle functions: Mounting function.. after render, then 
     execute this function 
          'async' function to 'await' data from server before mounting
     */
    async componentDidMount() {
        /*ask a Service for the data
        create service Object...call it's getproducts() function. Then send to state of Product Component! */
        let service = new ProductService();
        const data = await service.getProducts();
        this.setState({products: data});



        //identify the unique categories
        let catagories = [];

        //travel the array
        for(let i = 0; i < data.length; i++){
            let element = data[i];

            //Does an element exist inside array??
            //Returns index of element IF found. If NOT found, then returns -1 when it does not exist
            // if(catagories.indexOf(element.category) === -1){
            //     catagories.push[element.category];
            // }

            //ES6 method. This method returns true or false if element exists in array
            if(!catagories.includes(element.category)){
                catagories.push(element.category);
            }
        }

        //SORT CATEGORY ARRAY AND SET STATE
        catagories = catagories.sort();

        console.log(catagories);

        this.setState({catagories: catagories}); //Set actual Category array
    }
}

export default Catalog;
