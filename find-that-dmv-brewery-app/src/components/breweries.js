import React from 'react'

    const Breweries= ({ breweries }) => {
      return (
        <div>
            <button class="btn btn-outline-primary mx-5" href="#">Create</button>
            <button class="btn btn-outline-primary mx-5" href="#">Edit</button>
            <button class="btn btn-outline-primary mx-5" href="#">Update</button>
          <p class="h1 text-center bg-dark text-white">DMV Breweries</p>
          {breweries.map((brewery) => (
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{brewery.name}</h3>
                <h4 className="card-subtitle mb-2 text-muted">{brewery.breweryType}</h4>
                <p className="card-text text-center">
                {brewery.state} 
                </p>
                <p className="card-text text-center">
                {brewery.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Breweries