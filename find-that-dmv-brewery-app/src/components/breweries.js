import React from 'react'

    const Breweries= ({ breweries }) => {
      return (
        <div>
          <center><h1>DMV Breweries! </h1></center>
          {breweries.map((brewery) => (
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{brewery.name}</h3>
                <h4 className="card-subtitle mb-2 text-muted">{brewery.breweryType}</h4>
                <p className="card-text">
                {brewery.state} 
                </p>
                <p className="card-text">
                {brewery.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Breweries