import React, { Component } from 'react';
import axios from 'axios';
import SightingsList from './Components/Sightings/SightingsList';
import SightingForm from './Components/Form/SightingForm';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

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

        <Jumbotron>
          <h3 className="App">
            Duck sightings
          </h3>
        </Jumbotron>

        <Container>
          <Row>
            <Col xs="12" sm="8">
              <SightingsList sightings={this.state.sightings} sortByNewest={this.state.newestIsFirst}/>
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
