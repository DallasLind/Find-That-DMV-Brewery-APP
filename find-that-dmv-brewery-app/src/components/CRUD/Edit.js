import React, { Component } from 'react';
import axios from "axios";

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            breweryType: "",
            state: "",
            city: ""
        };
        this.editBrew = this.editBrew.bind(this);
        this.submitBrew = this.submitBrew.bind(this);
    }
        editBrew = evt => {
            evt.preventDefault();
            this.setState({ [evt.target.name]: evt.target.value.toUpperCase() });
            console.log(this.state.name);
        };
        submitBrew = evt => {
            evt.preventDefault();
            axios
                .post("https://dmv-breweries-api.herokuapp.com/", {
                    name: this.state.name,
                    breweryType: this.state.breweryType,
                    state: this.state.state,
                    city: this.state.city
                })
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        };
        render() {
            return(
                <form className="input-group mb-3" onSubmit={this.submitBrew}>
                    <input className="form-control"
                    type="text"
                    name="name"
                    placeholder="Name of Brewery"
                    onChange={this.editBrew}
                    ></input>
                    <input className="form-control input group-prepend"
                    type="text"
                    name="breweryType"
                    placeholder="Brewery Type"
                    onChange={this.editBrew}
                    ></input>
                    <input className="form-control input-group-prepend"
                    type="text"
                    name="state"
                    placeholder="State (D.C., Maryland, or Virginia)"
                    onChange={this.editBrew}
                    ></input>
                    <input className="form-control input-group-prepend"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={this.editBrew}
                    ></input>
                </form>
            );
        } 
    }

export default Edit