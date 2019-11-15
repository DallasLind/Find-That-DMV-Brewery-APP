import React, { Component } from 'react';
import './App.css';

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
    this.setState({ name: res });
    console.log(res);
  })
  .catch(err => console.log(err));
}


render(){
  return(
    <div className="card">
            <div className="card-body">
              <h5 className="card-title">D.C. Breweries</h5>
              <h6 className="card-subtitle mb-2 text-muted">return breweries</h6>
              <p className="card-text">Yum</p>
            </div>
          </div>
  )
}
}

export default App;
