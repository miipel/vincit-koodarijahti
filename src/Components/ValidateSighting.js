import React from 'react';
import { FormFeedback } from 'reactstrap';

const validateSighting = (props) => {
  const sightingName = props.text;
  const validSpecies = props.species;
  const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

  return (isValid ? <FormFeedback>Does match!</FormFeedback> : <FormFeedback>Does not match any species!</FormFeedback>);
}

export default validateSighting;