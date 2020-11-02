import React, { Component } from 'react';
import "./footer.css";
import logo from "./img/finalL.png";


class Footer extends Component {

    render() { 
        return (
        <React.Fragment>
            <div id="footerMain">
                <div id="logoMain">
                    <img src={logo} alt="logo" id="logo" width="180px" height="120px"/>
                </div>
                <div id="message">
                    <h3 id="footerQ">Seasonable. Sustainable. Savorable.</h3>
                    <h3 id="copy">Copyright reserved &copy; 2020 Katelynn Heasley</h3>
                </div>
            </div>
        </React.Fragment>
        );
    }
}
 
export default Footer;