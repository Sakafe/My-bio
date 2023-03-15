import React from 'react';
import './HeroImag.css'
const HeroImag = (props) => {
    const heading = props.heading;
    const text = props.text;
    return (
        <div className='hero-img'>
            <div className='heading'>
               <h1>{heading}</h1>
               <p>{text}</p>
            </div>
        </div>
    );
};

export default HeroImag;