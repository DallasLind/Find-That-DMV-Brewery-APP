import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import Breweries from './components/breweries'
import NavbarPage from './components/Nav'

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
    <div className="App">
    <NavbarPage></NavbarPage>
    <Breweries breweries={this.state.breweries} />
    </div>
    )
  }
}

export default App;
