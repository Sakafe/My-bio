import React from 'react';
import AboutContent from '../AboutContent/AboutContent';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroImag from '../HeroImag/HeroImag';
import './About.css'
const About = () => {
    return (
        <div>
            <Header/>
            <HeroImag heading='About.' text='I am a friendly React developer and SEO Expert.'/>
            <AboutContent/>
            <Footer/>
        </div>
    );
};

export default About;