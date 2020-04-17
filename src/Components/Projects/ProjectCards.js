import React from 'react';
import './ProjectCards.css';
import Image1 from '../../assets/workImage3.png';
import Image2 from '../../assets/workImage2.png';
import Image3 from '../../assets/workImage5.png';
import Image4 from '../../assets/37746035_1678075772315180_7569253979385757696_o2.jpg';
import '../../assets/icons/font/flaticon.css';
import {NavLink} from "react-router-dom";

const projectCards = () => {
    return(
        <div className='container'>
            <div className='projectCards'>
            <div className='row'>
                <div className='col col-md-4'>
                    <NavLink to='/projects2'>
                        <div className='projectCard'>
                            <div className='header'>
                                PRODUCTION UNIT
                            </div>
                            <div className='card-image'>
                                <img src={Image1} alt='workimage' />
                                <div className='project_logo'>
                                    <p> Industrial Hall </p>
                                </div>
                            </div>
                            <div className='card_text'>
                                <p className='price'>10 million EUR</p>
                                <p className='company'>Dip Invest Ltd.</p>
                                <p className='date'>2014.</p>
                                <hr className='sepline2'/>
                                <i className='flaticon-arrow-pointing-to-right'/>

                            </div>
                        </div>
                    </NavLink>
            </div>

                <div className='col col-md-4'>
                    <NavLink to='/projects2'>
                        <div className='projectCard'>
                            <div className='header'>

                                CARGO AND LOGISTIC BASE
                            </div>
                            <div className='card-image'>
                                <img src={Image2} alt='workimage' />
                                <div className='project_logo'>
                                    <p> Logistic Hall </p>
                                </div>
                            </div>
                            <div className='card_text'>
                                <p className='price'>30 million EUR</p>
                                <p className='company'>
                                    Saigo Port Ltd.</p>
                                <p className='date'>2015.</p>
                                <hr className='sepline2'/>
                                <i className='flaticon-arrow-pointing-to-right'/>
                            </div>
                        </div>
                    </NavLink>

                </div>


                <div className='col col-md-4'>
                    <NavLink to='/projects2'>
                        <div className='projectCard'>
                            <div className='header_except'>
                                COCA-COLA HBC REGIONAL LOGISTIC <br /> CENTRE
                            </div>
                            <div className='card-image'>
                                <img src={Image3} alt='workimage' />
                                <div className='project_logo'>
                                    <p> Logistic Hall </p>
                                </div>
                            </div>
                            <div className='card_text'>
                                <p className='price'>2 million EUR</p>
                                <p className='company'>
                                    XANGA Service Ltd.</p>
                                <p className='date'>2008.</p>
                                <hr className='sepline2'/>
                                <i className='flaticon-arrow-pointing-to-right'/>
                            </div>
                        </div>
                    </NavLink>
            </div>
            </div>
            <div className='row'>
                <div className='col col-md-4'>
                    <NavLink to='/projects2'>

                    <div className='projectCard'>
                        <div className='header'>

                            INNOVATION AND INCUBATOR CENTRE
                        </div>
                        <div className='card-image'>
                            <img src={Image4} alt='workimage' />
                            <div className='project_logo'>
                                <p> Office building </p>
                            </div>
                        </div>
                        <div className='card_text'>
                            <p className='price'>5 million EUR</p>
                            <p className='company'>Saigo Logistic Ltd.</p>
                            <p className='date'>2014.</p>
                            <hr className='sepline2'/>
                            <i className='flaticon-arrow-pointing-to-right'/>
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className='col col-md-4'>
                    <NavLink to='/projects2'>
                    <div className='projectCard'>
                        <div className='header'>
                            SERVICE CENTRE
                        </div>
                        <div className='card-image'>
                            <img src={Image2} alt='workimage' />
                            <div className='project_logo'>
                                <p> Office building </p>
                            </div>
                        </div>
                        <div className='card_text'>
                            <p className='price'>3 million EUR</p>
                            <p className='company'>Xstage Ltd.</p>
                            <p className='date'>2014.</p>
                            <hr className='sepline2'/>
                            <i className='flaticon-arrow-pointing-to-right'/>
                        </div>
                    </div>
                    </NavLink>
                </div>
                <div className='col col-md-4'>
                </div>
            </div>
        </div>
        </div>

    );
}
export default projectCards;