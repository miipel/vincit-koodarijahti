import React, { Component } from 'react';
import axios from 'axios';
import SightingsList from './Components/SightingsList';
import SightingAdd from './Components/SightingAdd';
import ValidateSighting from './Components/ValidateSighting';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  state = {
    sightings: [],
    species: [],
    textInput: '',
  }

  componentDidMount() {
    axios.get('/sightings')
      .then(response => {
        console.log(response);
        this.setState({ sightings: response.data });
      });

    axios.get('/species')
      .then(response => {
        console.log(response);
        this.setState({ species: response.data });
      });
  }

  textChangedHandler = (event) => {
    const input = event.target.value;
    this.setState({ textInput: input });
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="12" sm="8">
              <SightingsList sightings={this.state.sightings} />
            </Col>
            <Col sm="4">
              <SightingAdd />
            </Col>
          </Row>
        </Container>


        <ValidateSighting
          text={this.state.textInput}
          species={this.state.species} />
        <input
          type="text"
          onChange={this.textChangedHandler}
          value={this.state.textInput} />
      </div>
    );
  }
}

export default App;
