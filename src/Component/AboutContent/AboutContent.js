import React from 'react';
import './AboutContent.css'
import { Link } from 'react-router-dom';
// import Reactt from '../../assets/Images/react-development.jpg'
// import reactDev from '../../assets/Images/react-js-online-training.png'
import sakafe from '../../assets/Images/sakafe.jpg1.jpg'
const AboutContent = () => {
    return (
        <div className='about'>
            <div className='left'>
               <h1>Who Am i?</h1>
               <p>I am react front-end developer.I create react responsive secure website for my client.</p>
               <Link to='/contact'>
                <button className='btn'>Contact</button>
               </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    {/* <div className="img-stack top">
                        <img className='img' src={reactDev} alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img className='img' src={Reactt} alt="true" />
                    </div> */}
                    <div>
                        <img className='img' src={sakafe} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;