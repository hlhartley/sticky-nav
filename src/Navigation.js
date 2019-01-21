import React from 'react';
import './Navigation.css';

const Navigation = (props) => {
    return (
        <div className= { props.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
            <div className='logo'>LOST.</div>
            <a href='www.google.com'>HOME</a>
            <a href='www.google.com'>ABOUT</a>
            <a href='www.google.com'>IMAGES</a>
            <a href='www.google.com'>LOCATIONS</a>
            <a href='www.google.com'>MAPS</a>
        </div>
    );
}

export default Navigation;