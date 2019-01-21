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

      <BrowserRouter>
      <div className='app'>
        <Banner />
        <Navigation navFixed={this.state.navFixed} initialNavPosition={this.state.initialNavPosition}/>
        <Switch>
          <Route path="/" component={Home} exact navFixed={this.state.navFixed}/>
          <Route path="/about" component={About} navFixed={this.state.navFixed}/>
          <Route path="/images" component={Images} navFixed={this.state.navFixed}/>
          <Route path="/locations" component={Locations} navFixed={this.state.navFixed}/>
          <Route path="/maps" component={Maps} navFixed={this.state.navFixed}/>
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
