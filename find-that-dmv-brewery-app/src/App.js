import React, { Component } from 'react';
import Home from './Home.js';
import './App.css';
import { url } from 'inspector';

class App extends Component {
    state = {
      breweries: [],
      isLoaded: false
  }
    componentDidMount(){
      const url = "https://dmv-breweries-api.herokuapp.com/";
     fetch(url)
     .then(res => res.json())
     .then(res => {
       console.log(res);
       this.setState({
         breweries: res.data,
         isLoaded: true
       });
       console.log(this.state.breweries);
     });
    }

getBrews(evt){
  evt.preventDefault();
  this.componentDidMount()
}

render(){
  return(
    <div class="card">
            <div class="card-body">
              <h5 class="card-title">D.C. Breweries</h5>
              <h6 class="card-subtitle mb-2 text-muted">{this.state.name}</h6>
              <p class="card-text">Yum</p>
            </div>
          </div>
  )
}
}

export default App;
