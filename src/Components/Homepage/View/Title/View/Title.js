import header_image from "../../../../../assets/mobile_header_image2.png";
import React from 'react';
import './Title.css';



const title = () => {
    return(
    <div className='container'>
        <div className='row'>
            <div className='col-12 col-lg-6'>
                <div className='title'>
                    <p id='xanga'> XANGA </p>
                    <p id='investment'> INVESTMENT AND DEVELOPMENT</p>
                    <p id='group'>GROUP</p>
                    <p id="paragraph"><b>20 years’ proven</b> reference in build-to-suit industrial, logistic and
                        service facility development</p>
                </div>
            </div>

            <div className='col-12 col-lg-6'>
                <div className='header_img'>
                    <img src={header_image} alt={header_image}/>
                </div>
            </div>

        </div>
    </div>
    );
}
export default title;