import React, { Component } from 'react';
import "./about.css";


class About extends Component{
    state = {
        emailVisible: false
    }

    render(){
        return(
        <div className="jumbotron">
            <h1 className="display-4">About Us</h1>
            <h2>Founder: Katelynn Heasley</h2>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4"></hr>
            <p>Send us an email and let us know how we're doing!</p>

            {this.getEmailText()}

            <button className="btn btn-primary btn-lg"
             onClick={this.onButtonClicked} >{this.state.emailVisible ? "Hide email": "Show email"}</button>
        </div>
        );
    }

    getEmailText(){
        if(this.state.emailVisible){
            return(
                // return "contactMe@organicbeans.com";
                <div className="card text-center">
                    <div className="card-header">
                        Organic Beans
                    </div>
                    <div classNames="card-body">
                        <h5 className="card-title">Contact Information</h5>
                        <a href="mailto:contactMe@organicbeans.com">contactme@organicbeans.com</a>

                        <h5 className="card-title">Address</h5>
                        <p className="card-text">5555 Veggie Way</p>
                        <p className="card-text">San Diego, CA 92115</p>
                    </div>
                    <div className="card-footer text-muted">
                    </div>
                </div>
            );
        }
        return <label>Click the button to see my email</label>
    }

    onButtonClicked = () => {
        //Update state, Toggle the opposite
        this.setState({emailVisible: !this.state.emailVisible});

    }
}
export default About;