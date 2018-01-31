import React, { Component } from 'react';
import axios from 'axios';
import classes from './App.css';
import SightingsList from './Components/SightingsList';
import SightingCreate from './Components/SightingCreate';
import ValidateSighting from './Components/ValidateSighting';

class App extends Component {
  state = {
    sightings: [],
    species: [],
    textInput: ''
  }

  componentDidMount() {
    axios.get('/sightings')
      .then( response => {
        console.log(response);
        this.setState({ sightings: response.data });
      });

    axios.get('/species')
      .then( response => {
        console.log(response);
        this.setState({ species: response.data });
      });
  } 
  
  textChangedHandler = ( event ) => {
    const input = event.target.value;
    this.setState({ textInput: input });
  }

  render() {
    return (
      <div className={classes.App}>
        <SightingsList sightings={this.state.sightings} />
        <input 
          type="text"
          onChange={this.textChangedHandler} 
          value={this.state.textInput}/>
        <ValidateSighting 
          text={this.state.textInput} 
          species={this.state.species}/>
      </div>
    );
  }
}

export default App;
