import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
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
        value: this.props.dateTime,
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
    validSpecies: null
  }

  dateTimeInputChangedHandler = (value) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedDateTime = updatedForm.dateTime;
    updatedDateTime.value = value;
    updatedDateTime.valid = this.checkDateTimeValidity(updatedDateTime.value);
    updatedForm.dateTime = updatedDateTime;
    this.setState({ form: updatedForm });
  }

  checkDateTimeValidity(dateTimeInput) {
    const dateTime = dateTimeInput;
    const isValid = Moment(dateTime).isValid();
    return isValid;
  }

  checkSpeciesValidity(sighting) {
    const sightingName = sighting;
    const validSpecies = this.props.species;
    console.log(validSpecies);
    const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

    return isValid;
  }

  speciesInputChangedHandler = (event) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedSpecies = updatedForm.species;
    updatedSpecies.value = event.target.value;
    updatedSpecies.valid = this.checkSpeciesValidity(updatedSpecies.value);
    updatedForm.species = updatedSpecies;
    this.setState({ form: updatedForm });
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
              onChange={value => this.dateTimeInputChangedHandler(value)} />
          </FormGroup>
          <FormGroup row>
            <Label for="species">Species</Label>
            <Input
              id="species"
              required
              type='text'
              onChange={this.speciesInputChangedHandler}
              valid={this.state.form.species.valid} />
            <FormFeedback>Does not match any species!</FormFeedback>
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
          <Button>Add sighting</Button>
        </Form>
      </div>
    );
  }
}

export default SightingForm;