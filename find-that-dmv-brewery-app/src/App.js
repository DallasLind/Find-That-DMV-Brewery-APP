import React, { Component } from 'react';
import Home from './Home.js';
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
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">D.C. Breweries</h5>
              <h6 class="card-subtitle mb-2 text-muted">Brewpub</h6>
              <p class="card-text">Yum</p>
            </div>
          </div>
  );
}
}
export default App;
