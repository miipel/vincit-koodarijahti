import React, { Component } from 'react';
import { Form, FormGroup, Button } from 'reactstrap';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';
import axios from 'axios';
import SightingInput from './SightingInput';

import './SightingForm.css';
import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.css';

Moment.locale('fi');
momentLocalizer();

class SightingForm extends Component {
  state = {
    form: {
      dateTime: {
        elementConfig: {
          label: 'Date and time',
          type: 'dateAndTime'
        },
        value: null,
        valid: false
      },
      species: {
        elementConfig: {
          label: 'Species',
          type: 'dropDown'
        },
        value: null,
        valid: false
      },
      count: {
        elementConfig: {
          label: 'Count',
          type: 'number'
        },
        value: 0,
        valid: false
      },
      description: {
        elementConfig: {
          label: 'Description',
          type: 'textarea'
        },
        value: '',
        valid: false
      }
    },
    serverResponse: '',
    formIsValid: false
  }

  componentDidUpdate() {
    console.log(this.state.form)
  }

  check(value, rule) {
    let isValid = false;

    if (rule === 'dateTime') {
      isValid = Moment(value).isValid();
    }

    if (rule === 'species') {
      const sightingName = value;
      const validSpecies = this.props.species;
      isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);
    }

    if (rule === 'count') {
      isValid = value >= 1;
    }

    if (rule === 'description') {
      isValid = value.length > 0
    }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    const updatedForm = {
      ...this.state.form
    }
    const updatedFormElement = {
      ...updatedForm[inputIdentifier]
    }
    if (inputIdentifier === 'dateTime' || inputIdentifier === 'species') {
      updatedFormElement.value = event;
    } else {
      updatedFormElement.value = event.target.value;
    }
    updatedFormElement.valid = this.check(updatedFormElement.value, inputIdentifier);
    updatedForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true;
    for (let inputIdentifier in updatedForm) {
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
    }
    this.setState({ form: updatedForm, formIsValid: formIsValid });
  }

  addSightingHandler = (event) => {
    const formData = {};
    for (let formElement in this.state.form) {
      formData[formElement] = this.state.form[formElement].value;
    }

    axios.post('/sightings', formData)
      .then(response => {
        this.setState({ serverResponse: response.data });
      });
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.form) {
      formElementsArray.push({
        id: key,
        singleElement: this.state.form[key]
      });
    }

    const possibleSpecies = this.props.species.map(species => species.name)

    let form = (
      <Form onSubmit={this.addSightingHandler} >
        <h3>
          Add new sighting
        </h3>
        <FormGroup row>
          {formElementsArray.map(formElement => (
            <SightingInput
              key={formElement.id}
              label={formElement.singleElement.elementConfig.label}
              value={formElement.singleElement.elementConfig.value}
              type={formElement.singleElement.elementConfig.type}
              changed={(event) => { this.inputChangedHandler(event, formElement.id) }}
              valid={formElement.singleElement.valid}
              species={possibleSpecies} />
          ))}
        </FormGroup>
        <Button disabled={!this.state.formIsValid}>Add sighting</Button>
      </Form>
    );

    return (
      <div className="form">
        {form}
      </div>
    );
  }
}

export default SightingForm;