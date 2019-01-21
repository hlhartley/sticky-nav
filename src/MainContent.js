import React from 'react';
import './MainContent.css';
import { Switch, Route } from 'react-router-dom';

const MainContent = (props) => (
        <div className={ props.navFixed ? "main-content add-margin" : "main-content" }>
            Hi
        </div>
    );

export default MainContent;