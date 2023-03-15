import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa'
const Header = () => {
  const [hamburger, setHamburger] = useState(false);
  const handleclick = () =>setHamburger(!hamburger);
  const [color,setColor] = useState(false);
  const changeColor= () =>{
    if(window.scrollY >=100){
      setColor(true);
    }else{
      setColor(false);
    }
  };
  window.addEventListener('scroll',changeColor);

    return (
        <div className={color? 'header header-bg' : 'header'}>
           <Link to='/'>
             <h1>Sakafe Hossain</h1>
           </Link>
           <ul className={hamburger? 'nav-menu active' : 'nav-menu'}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/service'>Service</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>contact</Link></li>
           </ul>
           <div className='hamburger' onClick={handleclick}>
            {hamburger? (<FaTimes size={20} style={{color:'#fff'}}/>) : <FaBars size={20} style={{color:'#fff'}}/>}
           </div>
        </div>

        
    );
};

export default Header;



       
    

