import React from 'react';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Header from '../Header/Header';
import HeroImag from '../HeroImag/HeroImag';

const Contact = () => {
    return (
        <div>
            <Header/>
            <HeroImag heading='Contact.' text='Lets have a chat.'/>
            <Form/>
            <Footer/>
        </div>
    );
};

export default Contact;