import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Navigation from './Navigation';
import MainContent from './MainContent';

class App extends Component {
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
      <div className="App">
        <Banner />
        <Navigation navFixed={this.state.navFixed} initialNavPosition={this.state.initialNavPosition}/>
        <MainContent navFixed={this.state.navFixed} />
      </div>
    );
  }
}

export default App;
