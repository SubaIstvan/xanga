import React from 'react';
import './Location2.css';
import Layout from '../Layout/View/Layout';
import map from '../../assets/map3.png';
import workimage1 from '../../assets/workImage1.png';
import workimage2 from  '../../assets/workImage3.png';
import workimage3 from '../../assets/workImage5.png';
import smallMap from '../../assets/smallMap.png';
import  './../../assets/icons/font/flaticon.css';
import {NavLink} from "react-router-dom";

const location2 = () =>{
    return(

        <Layout>
            <div className='full_location2'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-6  form-group'>
                        <div className='location_background'>
                            <div className='xanga_background'>
                        <p className='location_title'>DEBRECEN REGIONAL INNOVATION SCIENCE AND TECHONLOGY PARK</p>
                            <hr  className='sepline'/>
                            </div>
                                <p className='location_titles'>Size</p>
                                <p className='location_text'>130ha</p>
                                <p className='location_titles'>History</p>
                                <p className='location_text'>
                                    History

                                    Size

                                    Debrecen Regional and Innovation Industrial Park  was established by the Municipality of Debrecen in 1997 with the aim of providing - as a greenfield investment - a modern industrial environment equipped with high capacity public utilities and access roads in Debrecen. Within the framework of the first phase of the development, a 40 ha area was equipped with high capacity public utilities between 2000 and 2002.

                                    The extension of the park with an additional 20 ha was realised within the framework of the sole investment and complete management of DIPA Debrecen Industrial Park Academy Ltd, member of the XANGA Group, in 2008.

                                    Since then, the area of the industrial park has been further extended. Currently, the total area of the park reaches 130 ha, of which ca. 40 ha is still to be filled with industrial facilities. Currently, XANGA is building the road and public utilities of a 20 ha area. The area of the park can further be extended.

                                </p>
                                <p className='location_titles'>Planned developments/expansions</p>
                                <p className='location_text'>Bürkle</p>
                                <p className='location_titles'>Projects</p>
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
                            <NavLink to='/projects2'>
                                <div className='more'><p id='more_text'> More </p><div className='location2_icon'><i className='flaticon-arrow-pointing-to-right'/></div> </div>
                            </NavLink>
                        </div>
                    </div>
                        <div className='col'>
                            <div className='box'>
                                Start-up incubator
                                <NavLink to='/projects2'>
                                    <div className='more'><p id='more_text'> More </p><div className='location2_icon'> <i className='flaticon-arrow-pointing-to-right'/> </div></div>
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
export default location2;