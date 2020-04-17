import React from 'react';
import './Contact.css';
import Layout from '../../Components/Layout/View/Layout';
import ContactCard from './ContactCard/ContactCard';
import map from '../../assets/debrecenMapAndMarkers.png';
import img1 from "../../assets/office circle.png";

const contact = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='contact'>
                    <div className='contact_titles'>
                    <div className='contact_title'>
                        CONTACT US
                    </div>
                        <div className='row'>
                            < div className='col col-4'>
                                <p className='main_title'>
                                    EMAIL
                                </p>
                                <p className='part_title'>
                                    info@xanga.com
                                </p>
                            </div>
                            <div className='col col-sm-8'>
                                <p className='main_title'>
                                   LinkedIn
                                </p>
                                <p className='part_title'>
                                    https://www.linkedin.com/company/xanga-investment-development-group
                                </p>
                            </div>
                        </div>

                </div>
                    <hr className='sepline'/>
                    <ContactCard/>
                    <img src={map} alt='map' />
                </div>

            </div>
        </Layout>
    );
}

export default contact;