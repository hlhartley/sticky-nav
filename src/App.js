import React, { Component } from 'react';
import './App.css';
import Banner from './Banner';
import Navigation from './Navigation';
import MainContent from './MainContent';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import About from './About';
import Images from './Images';
import Locations from './Locations';
import Maps from './Maps';
import Error from './Error';

// const NewRoute = () => {
//   return (
//     <div>
//       <p>New Route</p>
//     </div>
//   )
// }

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
        {/* <MainContent navFixed={this.state.navFixed} /> */}
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
          <Route path="/images" component={Images}/>
          <Route path="/locations" component={Locations}/>
          <Route path="/maps" component={Maps}/>
          <Route component={Error}/>
          </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
