import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./home.css";

class Home extends Component{

    render(){
        return(
        <div className="jumbotron">
            <h1 className="display-4">Welcome Home to Organic!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <Link className="btn btn-primary btn-lg" to="/catalog" role="button">Browse Groceries</Link>
        </div>
        );
    }

}
export default Home;