import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

import './SightingForm.css';

Moment.locale('fi');
momentLocalizer();

class SightingForm extends Component {
  state = {
    form: {
      dateTime: {
        value: new Date(),
        valid: false
      },
      species: {
        value: '',
        valid: false
      },
      count: {
        value: 0,
        valid: false
      },
      description: {
        value: '',
        valid: false
      }

    },
    validSpecies: this.props.species
  }

  dateTimeInputChangedHandler = (value) => {
    const updatedInput = {
      ...this.state.form.dateTime
    }
    updatedInput.value = value;
    console.log(updatedInput.value);

    this.setState({ dateTime: updatedInput });
  }

  checkSpeciesValidity = (event) => {
    const sightingName = event.target.value;
    const validSpecies = this.props.validSpecies;
    const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

    return isValid;
  }

  render() {
    return (
      <div className="SightingForm">
        <Form>
          <FormGroup row>
            <Label for="dateAndTime">Date and time</Label>
            <DateTimePicker
              id="dateAndTime"
              value={this.state.form.dateTime.value}
              onChange={this.dateTimeInputChangedHandler} />
          </FormGroup>
          <FormGroup row>
            <Label for="species">Species</Label>
            <Input
              id="species"
              required
              type='text'
              onChange={this.textChangedHandler} />
          </FormGroup>
          <FormGroup row>
            <Label for="count">Count</Label>
            <Input
              id="count"
              required
              type='number' />
          </FormGroup>
          <FormGroup row>
            <Label for="description">Description</Label>
            <Input
              id="description"
              required
              type='textarea' />
          </FormGroup>
          <Button disabled={false}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SightingForm;