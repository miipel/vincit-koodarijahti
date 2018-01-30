import React from 'react';

import classes from './Sighting.css';

const sighting = (props) => {
    const sighting = props.sighting;

    return (
        <div className={classes.Sighting}>
            <p>ID: {sighting.id}</p>
            <p>Date and time: {sighting.dateTime}</p>
            <p>Description: {sighting.description}</p>
            <p>Species: {sighting.species}</p>
            <p>Count: {sighting.count}</p>
        </div>
    );
}

export default sighting;