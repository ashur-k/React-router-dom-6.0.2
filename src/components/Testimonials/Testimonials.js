import React from 'react';
import './Testimonials.css';
import { FaDatabase } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className='testimonial'>
            <div className='container'>
                <div className='outline'>
                    <div className='content'>
                        <i><FaDatabase /> Staxx</i>
                        <p className='body'>Some testimonial text is going to go here.
                            this can be any customer saying something 
                            about the product.
                        </p>
                        <div className='name'>
                            <p>Marie Chilvers</p>
                            <p>CEO, Staxx</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Testimonials
