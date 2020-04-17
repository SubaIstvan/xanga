import React from 'react';
import './ContactCard.css';
import img1 from '../../../assets/office circle.png';
import img2 from '../../../assets/gear circle 1.png';
import img3 from '../../../assets/Flight circle.png';
import img4 from '../../../assets/gear circle 2.png';

const contactCard = () => {

    return(
        <div className='container'>
            <div className='full_contactcard'>
            <div className='row'>
                <div className='col col-12 col-lg-3'>
                    <div className='contact_card'>
                        <div className='card_header'>
                            STARTUP INCUBATOR
                        </div>
                        <img src={img1} alt='img1' />
                        <div className='card_body'>
                            <p className='paragraf1'>Hungary, 4025 Debrecen, Simonffy str. 4-6.</p>
                            <p className='paragraf2'>Fax:</p>
                            <p className='paragraf1'>+36 (52) 534-951</p>
                            <p className='paragraf2'>Phone:</p>
                            <p className='paragraf1'>+36 (52) 534-950</p>
                            <p className='paragraf2'>Email:</p>
                            <p className='paragraf1'>info[at]xanga[dot]hu</p>
                        </div>
                    </div>
            </div>
                <div className='col col-12 col-lg-3'>
                    <div className='contact_card'>
                        <div className='card_header'>

                            REGIONAL AND INNOVATION SCIENCE AND TECHNOLOGY
                        </div>
                        <img src={img2} alt='img1' />
                        <div className='card_body'>
                            <p className='paragraf1'>Hungary, 4031 Debrecen, Határ street 1.

                            </p>
                            <p className='paragraf2'>Fax:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Phone:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Email:</p>
                            <p className='paragraf1'>info[at]xanga[dot]hu</p>
                        </div>
                    </div>
                </div>
                <div className='col col-12 col-lg-3'>
                    <div className='contact_card'>
                        <div className='card_header'>
                            AIRPORT BUSINESS PARK
                        </div>
                        <img src={img3} alt='img1' />
                        <div className='card_body'>
                            <p className='paragraf1'>Hungary, 4225 Debrecen, Mikepércsi str. 51.</p>
                            <p className='paragraf2'>Fax:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Phone:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Email:</p>
                            <p className='paragraf1'>info[at]xanga[dot]hu</p>
                        </div>
                    </div>
                </div>
                <div className='col col-12 col-lg-3'>
                    <div className='contact_card'>
                        <div className='card_header'>
                            SOUTHERN INDUSTRIAL PARK
                        </div>
                        <img src={img4} alt='img1' />
                        <div className='card_body'>
                            <p className='paragraf1'>Hungary, 4031 Debrecen, Határ street 1.</p>
                            <p className='paragraf2'>Fax:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Phone:</p>
                            <p className='paragraf1'>-</p>
                            <p className='paragraf2'>Email:</p>
                            <p className='paragraf1'>info[at]xanga[dot]hu</p>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
}
export default contactCard;