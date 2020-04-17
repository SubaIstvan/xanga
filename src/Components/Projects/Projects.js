import React from 'react';
import './Projects.css';
import Layout from '../Layout/View/Layout';
import ProjectCards from './ProjectCards';


const projects = () =>{

    return(
        <Layout>

                <div className='container'>
                    <div className='projects'>
                    <div className='project_title'>Projects</div>
                    <hr className='sepline' />
                        <ProjectCards/>
                    </div>
            </div>
        </Layout>


    );
}

export  default projects;