import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    sightings: [],
    species: []
  }

  componentDidMount() {
    fetch('/sightings')
      .then(res => {
        return res.json()
      })
      .then(sightings => {
        this.setState( {sightings: sightings} )
      })
  }  

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;
