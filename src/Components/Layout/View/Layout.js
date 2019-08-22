import React from 'react';
import './Layout.css';
import Header from './Header/Header';
import Footer from './Footer/Footer'


const layout = (props) => {
    return(   <div className='layout'>


            <Header/>
            {props.children}

            <Footer/>

        </div>


    );
}
export default layout;