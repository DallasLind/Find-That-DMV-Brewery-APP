import React, { Component } from 'react';
import './App.css';
import Breweries from './components/breweries'
import Search from "./components/search"

class App extends Component {
constructor(props){
  super(props);
  this.state = {
    apiUrl: "http://localhost:5000/",
    proxyUrl: "https://cors-anywhere.herokuapp.com/",
    breweries: []
  };
  this.componentDidMount = this.componentDidMount.bind(this);
}

componentDidMount(){
  fetch("http://localhost:5000/", {
    headers: {
      'Accept': "application/json"
    }
  })
  .then(res => res.json ())
  .then(res => {
    this.setState({ breweries: res });
    console.log(res);
  })
  .catch(err => console.log(err));
}


render(){
  return(
    <Breweries breweries={this.state.breweries} />
    )
  }
}

export default App;
