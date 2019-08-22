import Logo from "../../../../assets/logoWhite.png";
import React from 'react';
import './Footer.css';



const footer = () =>
{   return (
    <div className="footer">
        <p>XANGA2019</p>
        <img src={Logo}/>

    </div>

);
}
export default footer;