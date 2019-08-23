import React from 'react';
import Layout from '../../Layout/View/Layout';
import './About.css';
import user_img from '../../../assets/user-img.png';


const about = () => {

    return(
<div>
    <Layout>
        <div className='about'>
            <div className='container'>
                <div className='row'>
                    <div className='about_us'>
                    <div className='col col-6'>
                        <div className='background_container'>
                        <p className='titles'>ABOUT US</p>
                        <p className='text_title'>Company</p>
                        </div>
                            <p>XANGA Investment & Development Group is a private capital investment and real<br/>
                            estate developer enterprise, offering build-to-suit solutions for its partners’<br/>
                            industrial and logistics activities. Its core activity is developing greenfield industrial<br/>
                            areas equipped with high capacity public utilities and installing turnkey <br/>
                            manufacturing and logistics facilities and offices suitable for receiving high quality<br/>
                            technology transfer. During the past 2 decades  XANGA has generated and <br/>
                            implemented a great number of investment and development projects, as a result<br/>
                            of which dozens of  foreign and local enterprises launched their business<br/>
                            operation in the city. Understanding the effects of exponential technological<br/>
                            development and the needs of start- up companies, the Group is actively involved <br/>
                            in developing a supportive ecosystem that facilitates the start-up and growth of these businesses</p>

                        <p className='text_title'>History</p>
                        <div className='box'>
                            <div className='date'>
                                <p>1997</p>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='text_box'>
                                <p>Establishment of Debrecen Regional and<br/> Innovation Industrial Park.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='date'>
                                <p>2007</p>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='text_box'>
                                <p>40 ha area of the industrial park in Határ street<br/> became full of enterprises.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='date'>
                                <p>2011</p>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='text_box'>
                                <p>XANGA has acquired majority shares in Airport.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='date'>
                                <p>2017</p>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='text_box'>
                                <p>XANGA no longer operates the Airport (but still a<br/> shareholder ~25%)</p>
                            </div>
                        </div>
                        <div className='box'>
                            <div className='date'>
                                <p>2019</p>
                                <div className='circle'>
                                </div>
                            </div>
                            <div className='text_box_last'>
                                <p>Bürkle construction</p>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className='our_team'>
                    <div className='col col-6'>
                        <p className='titles'>OUR TEAM</p>
                        <div className='persons'>
                            <div className='person'>

                                <img src={user_img} />

                                <div className='team_text'>
                                <p className='name'>István Herdon</p>
                                <p className='carrier'>CEO</p>
                            </div>

                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
</div>
    );


}
export default about;