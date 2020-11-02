import React, { Component } from "react"; //imrc short
import { connect } from "react-redux";
import "./navBar.css";
import logoNav from "./img/logoSm.png";
import { Link } from 'react-router-dom';

//cc short
class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navMain">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <img src={logoNav} alt="logoNav" id="logoNav" width="70px" height="50"/>
                <Link className="navbar-brand" to="/#">Organic Beans</Link>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/catalog">Catalog</Link>
                 </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item active">
                <Link className="nav-link" to="/todo">Todo List</Link>
                </li>
                </ul>
            <div className="form-inline my-2 my-lg-0">
              {/* Cart total updates! */}
              <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
                <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                View cart
                <span className="badge badge-primary cart-badge">{this.props.count}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment> 
    );
  }
}
// receive State and map it to a 'count' parameter
const mapStateToProps = (state) => {
  return {
    test: 'this is a test',
    count: state.cart.length,
  }
}

//Pass a function that maps the state to an obj.
export default connect(mapStateToProps,null)(NavBar);
