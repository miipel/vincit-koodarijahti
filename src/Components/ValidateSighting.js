import React from 'react';
import PropTypes from 'prop-types';

const validateSighting = (props) => {
  const isValid = false;

  return (
    <div>
      {isValid ? <p>Does match!</p> : <p>Does not match any existing species!</p>}
    </div>
  );
}

export default validateSighting;