import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Navigation from './Navigation';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Images from './Images';
import Locations from './Locations';
import Maps from './Maps';
import Error from './Error';

class App extends Component {
  constructor() {
    super();
    this.state = {
        cities: [],
        navFixed: false,
        initialNavPosition: 0,
    };
}

componentDidMount() {
  fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
    .then(results => results.json())
    .then((result) => {
      this.setState({
        cities: [...result]
      })
    })
    .catch(err => {
      this.setState({error: err})
    })
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
      <BrowserRouter>
      <div className='app'>
        <Banner />
        <Navigation navFixed={this.state.navFixed} initialNavPosition={this.state.initialNavPosition}/>
        <Switch>
          <Route 
            path="/" exact 
            render={(props) => <Home {...props} navFixed={this.state.navFixed} />}
          />
          <Route 
            path="/about"
            render={(props) => <About {...props} navFixed={this.state.navFixed} />}
          />
          <Route 
            path="/images"  
            render={(props) => <Images {...props} navFixed={this.state.navFixed} />}
            />
          <Route 
            path="/locations"
            render={(props) => <Locations {...props} navFixed={this.state.navFixed} cities={this.state.cities}/>}
          />
          <Route 
            path="/maps"
            render={(props) => <Maps {...props} navFixed={this.state.navFixed} />}
          />
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
