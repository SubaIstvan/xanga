import React from 'react';
import './References.css';
import logo1 from  '../../../../../assets/cola_logo.png';
import logo2 from '../../../../../assets/rg_logo.png';
import logo3 from  '../../../../../assets/ni_logo.png';
import  logo4 from '../../../../../assets/shaelfer_logo.png';



const references = () =>
{
    return(
        <div className='full_references'>
            <div className='background_references'>
            <p className='title_references'>REFERENCES</p>
        <div className='container'>
            <div className='row'>
                <div className='col col-sm-4 form-group'>
                    <div className='img_references'>
                        <img src={logo1} />
                    </div>
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo2} />
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo3} />
                </div>
            </div>
            <div className='row'>
                <div className='col col-sm-4 form-group'>
                    <img src={logo4} />
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo1} />
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo4} />
                </div>
            </div>
            <div className='row'>
                <div className='col col-sm-4 form-group'>
                    <img src={logo2} />
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo3} />
                </div>
                <div className='col col-sm-4 form-group'>
                    <img src={logo2} />
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}
export default references;