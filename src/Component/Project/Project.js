import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'
import HeroImag from '../HeroImag/HeroImag';
import './Project.css'
import PricingCard from '../PricingCard/PricingCard';
import Work from '../Work/Work';
const Project = () => {
    return (
        <div className='project'>
            <Header/>
            <HeroImag heading='SERVICES.' text='Some of my most recent works.'/>
            <Work/>
            <PricingCard/>
            <Footer/>
        </div>
    );
};

export default Project;