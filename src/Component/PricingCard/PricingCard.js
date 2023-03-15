import React from 'react';
import { Link } from 'react-router-dom';
import './PricingCard.css'
const PricingCard = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
               <div className="card">
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>- 3 days -</p>
                <p>- 3 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive web design -</p>
                <Link to='/contact'><button className='btn purchase-btn'>Purchase Now</button></Link>
               </div>

               <div className="card">
                <h3>-Premeum-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>- 2 days -</p>
                <p>- 5 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive web design -</p>
                <Link to='/contact'><button className='btn purchase-btn'>Purchase Now</button></Link>
               </div>

               <div className="card">
                <h3>-Business-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 300</p>
                <p>- 5 days -</p>
                <p>- 8 pages -</p>
                <p>- Featured -</p>
                <p>- Responsive web design -</p>
                <Link to='/contact'><button className='btn purchase-btn'>Purchase Now</button></Link>
               </div>


            </div>
        </div>
    );
};

export default PricingCard;