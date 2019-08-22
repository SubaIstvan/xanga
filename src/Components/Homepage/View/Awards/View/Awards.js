import React from 'react';
import './Awards.css';
import  Card from'./Cards';

 const awards = () => {

return(
    <div className='full'>
    <div className='awards'>
        <p className='title_awards'>AWARDS</p>
        <div className='container'>
            <div className='row'>
                <div className='col col-sm-4'>
        <Card/>
                </div>
                    <div className='col col-sm-4'>
            <Card/>
                    </div>
                        <div className='col col-sm-4'>

            <Card/>
                        </div>
            </div>
                <div className='row'>
                            <div className='col col-sm-4'>
            <Card/>
                            </div>
                                <div className='col col-sm-4'>
            <Card/>
        </div>
                            </div>
    </div>
        </div>
    </div>
);
}
export default awards;