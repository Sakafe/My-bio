import React from 'react';
import './Footer.css'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
               <div className='left'>
                 <div className='location'>
                     <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                     <div>
                        <p>Chasara</p>
                        <p>Narayanganj-1400</p>
                        <p>Bangladesh</p>
                     </div>
                 </div>
                 <div className='phone'>
                  <h4>
                  <FaPhone size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                  +8801......789
                  </h4>
                 </div>
                    <div className='email'>
                    <h4>
                    <FaMailBulk size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                    ahmedsakafe@gmail.com
                    </h4>
                    </div>
               </div>
               <div className='right'>
                  <h4>About the Compani</h4>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos delectus, ipsam quod amet sapiente, quaerat recusandae laudantium ad cum impedit nemo repellat unde consequuntur blanditiis error quae fugiat odit aliquid?</p>
                  <div className='social'>
                  <FaFacebook size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                  <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                  <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}}/>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default Footer;