import React, { Component } from 'react';
import axios from 'axios';
import SightingsList from './Components/SightingsList';
import SightingForm from './Components/Form/SightingForm';
import { Container, Row, Col } from 'reactstrap';

import './App.css';

class App extends Component {
  state = {
    sightings: [],
    species: []
  }

  componentDidMount() {
    axios.get('/sightings')
      .then(response => {
        this.setState({ sightings: response.data });
      });

    axios.get('/species')
      .then(response => {
        this.setState({ species: response.data });
      });
  }

  render() {
    return (
      <div>
        <h3 className="App">
          Duck sightings
        </h3>
        <Container className="App">
          <Row>
            <Col xs="12" sm="8">
              <SightingsList sightings={this.state.sightings} />
            </Col>
            <Col sm="4">
              <SightingForm species={this.state.species} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
