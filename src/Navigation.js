import React, { Component } from 'react';
import './Navigation.css';


class Navigation extends Component {
    constructor() {
        super();
        this.state = {
            navFixed: false,
            initialNavPosition: 0
        };
    }

    componentDidMount() {
        const nav = document.querySelector('.navigation-container')
        window.addEventListener('scroll', this.fixNav.bind(this))
        this.setState({initialNavPosition: nav.offsetTop})
    }
    
    fixNav() {
        if(window.scrollY >= this.state.initialNavPosition) {
            this.setState({navFixed: true})
        } else {
            this.setState({navFixed: false})
        }
    }
    
    render() {
        return (
            <div className= { this.state.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
                <a href='www.google.com'>HOME</a>
                <a href='www.google.com'>ABOUT</a>
                <a href='www.google.com'>IMAGES</a>
                <a href='www.google.com'>LOCATIONS</a>
                <a href='www.google.com'>MAPS</a>
            </div>
        );
    }
}

export default Navigation;