import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import axios from 'axios';

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
    serverResponse: '',
    formIsValid: false
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

  checkSpeciesValidity(sighting) {
    const sightingName = sighting;
    const validSpecies = this.props.species;
    const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

    return isValid;
  }

  countInputHandler = (event) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedCount = updatedForm.count;
    updatedCount.value = event.target.value;
    updatedCount.valid = updatedCount.value >= 1;
    updatedForm.count = updatedCount;
    this.setState({ form: updatedForm });
  }

  descriptionInputHandler = (event) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedDescription = updatedForm.description;
    updatedDescription.value = event.target.value;
    updatedDescription.valid = updatedDescription.value.length > 0;
    updatedForm.description = updatedDescription;
    this.setState({ form: updatedForm });
  }


  addSightingHandler = (event) => {
    const formData = {};
    for (let formElement in this.state.form) {
      formData[formElement] = this.state.form[formElement].value;
    }

    let formIsValid = true;
    for (let formElement in this.state.form) {
      formIsValid = this.state.form[formElement].valid && formIsValid;
    }
    this.setState({ formIsValid: formIsValid })

    if (formIsValid) {
      axios.post('/sightings', formData)
        .then(response => {
          this.setState({ serverResponse: response.data });
        });
      console.log(this.state.serverResponse)
    }
    console.log(formData)
  }

  render() {
    console.log(this.state)
    return (
      <div className="SightingForm">
        <Form onSubmit={this.addSightingHandler}>
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
              type='number'
              onChange={this.countInputHandler}
              valid={this.state.form.count.valid} />
          </FormGroup>
          <FormGroup row>
            <Label for="description">Description</Label>
            <Input
              id="description"
              required
              type='textarea'
              onChange={this.descriptionInputHandler}
              valid={this.state.form.description.valid} />
          </FormGroup>
          <Button>Add sighting</Button>
        </Form>
      </div>
    );
  }
}

export default SightingForm;