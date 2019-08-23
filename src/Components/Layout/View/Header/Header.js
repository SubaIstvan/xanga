import React from 'react';
import Logo from '../../../../assets/logoWhite.png';
import {BrowserRouter as Router, Route, Link, NavLink} from "react-router-dom";
import './Header.css';
import Homepage from '../../../Homepage/View/Homepage';
import About from '../../../About/View/About';

const header = () => {

    return(
        <div id="menu_container">

            <div id="header_title">
                <img src={Logo} />

            </div>

            <div id="menu_items">

                <Link to="/">HOME</Link>
                <Link to="/about">ABOUT</Link>
                <Link to="/locations">LOCATIONS</Link>
                <Link to="/projects">PROJECTS</Link>
                <Link to="/news">NEWS</Link>
                <Link to="/contact">CONTACT</Link>


            </div>

            </div>
    );
}
export default header;