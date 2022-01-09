import React from 'react';
import './Pricing.css';

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className='container'>
                <div className='top-content'>
                    <div>
                        <h2>Everything you need for <span>£99 a month</span></h2>
                        <p>Includes every feature we offer plus unlimited projects and unlimited users</p>
                    </div>
                    <div className='btn-div'>
                        <button>Get started today</button>
                    </div>
                </div>
                <div className='bottom-content'>
                    <div className='card'>
                        <p><span>Everything you need</span></p>
                        <h3>All in one platform</h3>
                        <p>Here dummy text is going to be inserted. 
                            It can be bussiness logic or it can be 
                            product promotion, or something that promotes 
                            the bussisness
                        </p>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                    </div>
                    <div className='card'>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                        <div>
                            <p>Some information here for the clients</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Pricing
