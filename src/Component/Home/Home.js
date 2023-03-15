import React from 'react';
import './Home.css'
import bg5 from '../../assets/Images/bg5.jpg'
import { Link } from 'react-router-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Work from '../Work/Work';
const Home = () => {
    return (
       <div>
        <Header/>
         <div className='hero'>
            <div className='mask'>
              <img className='intro-img' src={bg5} alt="bg5" />
            </div>
            <div className='content'>
              <p>HI, I'M A FREELANCER.</p>
              <h1>SEO Expert & Front-end Developer.</h1>
              <div>
                <Link to='/service' className='btn'>Project</Link>
                <Link to='/contact' className='btn btn-light'>Contact</Link>
              </div>
            </div>
        </div>
        <Work/>
        <Footer/>
       </div>
    );
};

export default Home;