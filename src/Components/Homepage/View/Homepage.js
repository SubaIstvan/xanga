import React from 'react';
import './Homepage.css';
import Layout from '../../Layout/View/Layout';
import Title from '../View/Title/View/Title';
import Locations from '../View/Locations/Location';
import Awards from './Awards/View/Awards';
import References from './References/View/References'
import logo1 from "../../../assets/cola_logo.png";

const homepage = () => {
    return(

        <Layout>
            <Title/>
            <Locations/>
            <Awards/>
            <References/>
        </Layout>


    );
}

export default homepage;
