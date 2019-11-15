import React, { Component } from 'react';
import Home from './Home.js';
import breweries from './data/breweries.json';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      brewery: null
    }
    this.setBrewery = this.setBrewery.bind(this);
  }
  setBrewery(brewery){
    this.setState({brewery: brewery})
  }
render(){
  return(
    <div className="App">
      <Nav> </Nav>
        <Route path="/" exact component = {Home}></Route>
        <Route path="/breweryinfo" exact component = {BreweryInfo}></Route>
  <Route exact path= "/breweryinfo:brewery" render = {routerProps => <BreweryInfo setBrewery = {this.setBrewery}{...routerProps}/>}{...this.state}></Route>
    </div>
  );
}
}
export default App;
