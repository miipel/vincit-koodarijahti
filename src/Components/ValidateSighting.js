import React from 'react';

const validateSighting = (props) => {
  const sightingName = props.text;
  console.log(sightingName);
  const validSpecies = props.species;
  console.log(validSpecies);
  const isValid = validSpecies.reduce((current, next) => next.name === sightingName, false);
  console.log(isValid);

  return (isValid ? <p>Does match!</p> : <p>Does not match any existing species!</p>);
}

export default validateSighting;