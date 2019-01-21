import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className= { props.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
            <div className='logo'>LOST.</div>
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='/about'>ABOUT</NavLink>
            <NavLink to='/images'>IMAGES</NavLink>
            <NavLink to='/locations'>LOCATIONS</NavLink>
            <NavLink to='/maps'>MAPS</NavLink>
        </div>
    );
}

export default Navigation;