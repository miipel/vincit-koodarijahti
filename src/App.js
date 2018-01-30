import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SightingsList from './Components/SightingsList';

class App extends Component {
  state = {
    sightings: [],
    species: []
  }

  componentDidMount() {
    axios.get('/sightings')
      .then( response => {
        console.log(response);
        this.setState({ sightings: response.data });
      });
  }  

  render() {
    return (
      <div>
        <SightingsList 
          sightings={this.state.sightings}
          species={this.state.species}/>
      </div>
    );
  }
}

export default App;
