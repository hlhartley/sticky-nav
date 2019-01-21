import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Navigation from './Navigation';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Navigation />
        <MainContent />
      </div>
    );
  }
}

export default App;
