import React from 'react';
import './Location.css';
import workimage1 from '../../../../assets/workImage1.png';
import workimage2 from '../../../../assets/workImage2.png';
import workimage3 from '../../../../assets/workImage3.png';
import workimage4 from '../../../../assets/37746035_1678075772315180_7569253979385757696_o2.jpg';
import mapImage from '../../../../assets/debrecenMapAndMarkers.png';
import cicrleImage1 from  '../../../../assets/gear circle 1.png';
import cicrleImage2 from '../../../../assets/office circle.png';
import circleImage3 from '../../../../assets/Flight circle.png';
import circleImage4 from  '../../../../assets/gear circle 2.png';
import '../../../../assets/icons/font/flaticon.css';
import {NavLink} from 'react-router-dom';



const locations = () => {
    return (
        <div className='locations'>
        <p id='title'>LOCATIONS</p>
        <div className='container-fluid'>

            <div className='row'>
                <div className='col-12 col-md-6'>
                    <div className='row'>
                    <div className='col'>
                    <div className="card-deck">

                        <div className="card">
                            <NavLink to='/location2'>
                            <img src={workimage2} className="card-img-top" alt="..."/>
                            <div className='imgcircle'>
                            <img src={cicrleImage1} alt='...'/>
                            </div>
                                <div className="card-body">

                                    <p className="card-text">
                                        Debrecen Regional Innovation Science and Techonlogy Park.</p>
                                    <div className='icon2'>
                                        <i className='flaticon-arrow-pointing-to-right' />
                                    </div>

                                </div>
                            </NavLink>
                        </div>

                        <div className="card">
                            <NavLink to='/location2'>
                            <img src={workimage4} className="card-img-top" alt="..."/>
                            <div className='imgcircle'>
                                <img src={cicrleImage2} alt='...'/>
                            </div>
                                <div className="card-body">

                                    <p className="card-text">
                                        Start-up incubator.</p>
                                    <div className='icon'>
                                    <i className='flaticon-arrow-pointing-to-right' />
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                        </div>
                        <div className="card-deck">
                            <div className="card">
                                <NavLink to='/location2'>
                                <img src={workimage1} className="card-img-top" alt="..."/>
                                <div className='imgcircle'>
                                    <img src={circleImage3} alt='...'/>
                                </div>
                                <div className="card-body">

                                    <p className="card-text">
                                        Debrecen International Airport Multimodal Logistics Center.</p>
                                    <div className='icon2'>
                                    <i className='flaticon-arrow-pointing-to-right' />
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                            <div className="card">
                                <NavLink to='/location2'>
                                <img src={workimage3} className="card-img-top" alt="..."/>
                                <div className='imgcircle'>
                                    <img src={circleImage4} alt='...'/>
                                </div>
                                <div className="card-body">

                                    <p className="card-text">

                                        Sourthen Industrial Park </p>
                                    <div className='icon'>
                                    <i className='flaticon-arrow-pointing-to-right' />
                                    </div>
                                </div>
                                </NavLink>
                            </div>
                        </div>
                </div>
                    </div>
                </div>



                <div className='col-12 col-md-6'>
                    <div id='mapimage'>
                    <img src={mapImage} alt='...'/>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default locations;