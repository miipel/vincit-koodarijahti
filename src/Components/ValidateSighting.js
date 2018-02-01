import React from 'react';

const validateSighting = (props) => {
  const sightingName = props.text;
  console.log(sightingName);
  const validSpecies = Object.values([...props.species]);
  console.log(validSpecies);
  const isValid = validSpecies.includes(sightingName);
  console.log(isValid);

  return (
    <div>
      {isValid ? <p>Does match!</p> : <p>Does not match any existing species!</p>}
    </div>
  );
}

export default validateSighting;