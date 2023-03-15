import React from 'react';
import { NavLink } from 'react-router-dom';
import './WorkCard.css'
const WorkCard = (props) => {
    const {img,title,text,view} = props.project;
    return (
        <div className='project-card'>
         <img src={img} alt="" />
            <h1 className='project-title'>{title}</h1>
            <div className='pro-details'>
                <p>{text}</p>
                <div className='pro-btns'>
                   <NavLink to={view} className='btn'>
                      view
                   </NavLink>
                   <NavLink to='url.com' className='btn'>
                      Source
                   </NavLink>
                </div>
            </div>
        </div>
    );
};

export default WorkCard;