import React from 'react';
import '../Location2/Location2';
import Layout from '../Layout/View/Layout';
import map from '../../assets/mapSubPage.png';
import workimage1 from '../../assets/workImage1.png';
import workimage2 from  '../../assets/workImage3.png';
import workimage3 from '../../assets/workImage5.png';
import smallMap from '../../assets/smallMap.png';
import  './../../assets/icons/font/flaticon.css';
import {NavLink} from "react-router-dom";

const projects2 = () =>{
    return(

        <Layout>
            <div className='full_location2'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 col-md-6  form-group'>
                            <div className='location_background'>
                                <div className='xanga_background'>
                                    <p className='location_title'>PRODUCTION UNIT</p>
                                    <hr  className='sepline'/>
                                </div>
                                <p className='location_titles'>Location</p>
                                <p className='location_text'>Debrecen International Airport</p>
                                <p className='location_titles'>Total building size</p>
                                <p className='location_text'>50.000sqm</p>
                                <p className='location_titles'>Volume of investment</p>
                                <p className='location_text'>30 million EUR</p>
                                <p className='location_titles'>Type</p>
                                <p className='location_text'>36 companies with more than 5000 employees .</p>
                                <img src={map} alt='map' />
                            </div>
                        </div>

                        <div className='col-12 col-md-6  form-group'>
                            <div className='images'>
                                <img src={workimage1} alt='workimage' />
                                <img src={workimage2} alt='workimage' />
                                <img src={workimage3} alt='workimage' />
                                <div className='small_device'>
                                    <p className='location_titles'>Location</p>
                                    <img src={smallMap} alt='smallMap' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='sepline2'/>

                <p className='other_titles'>Other locations</p>
                <div className='container'>
                    <div className='boxes'>
                        <div className='row'>
                            <div className='col'>
                                <div className='box'>
                                    Debrecen Regional Innovation Science and Techonlogy Park
                                    <NavLink to='/location2'>
                                        <div className='more'><p id='more_text'> More </p><i className='flaticon-arrow-pointing-to-right'/> </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box'>
                                    Start-up incubator
                                    <NavLink to='/location2'>
                                        <div className='more'><p id='more_text'> More </p><i className='flaticon-arrow-pointing-to-right'/> </div>
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
export default projects2;