import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './SightingForm.css';

class SightingForm extends Component {
  state = {
    dateInput: '',
    timeInput: '',
    speciesInput: '',
    countInput: 0,
    descInput: '',
    validSpecies: this.props.species
  }



  inputChangedHandler = (event) => {
    const input = event.target.value;
    this.setState({ dateInput: input });
    console.log(this.state.dateInput);
  }

  checkSpeciesValidity(value) {
    const sightingName = value;
    const validSpecies = this.props.species;
    const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

    return isValid;
  }

  render() {
    return (
      <Form>
        <FormGroup row>
          <Label>Date</Label>
          <Input
            required
            type='date'
            value={this.state.dateInput}
            onChange={this.inputChangedHandler} />
        </FormGroup>
        <FormGroup row>
          <Label>Time</Label>
          <Input
            required
            type='time' />
        </FormGroup>
        <FormGroup row>
          <Label>Species</Label>
          <Input
            required
            type='text'
            onChange={this.textChangedHandler} />
        </FormGroup>
        <FormGroup row>
          <Label>Count</Label>
          <Input
            required
            type='number' />
        </FormGroup>
        <FormGroup row>
          <Label>Description</Label>
          <Input
            required
            type='textarea' />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default SightingForm;