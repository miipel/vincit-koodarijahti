import React from 'react';

const validateSighting = (props) => {
  const sightingName = props.text;
  const validSpecies = props.species;
  const isValid = validSpecies.reduce((current, next) => next.name === sightingName || current, false);

  return (isValid ? <p>Does match!</p> : <p>Does not match any existing species!</p>);
}

export default validateSighting;