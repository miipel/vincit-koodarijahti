import React from 'react';
import Sighting from './Sighting';

import classes from './SightingsList.css';

const sightingsList = (props) => {
    const sightings = props.sightings.map((sighting, id) => {
        return <Sighting 
            key={id}
            sighting={sighting} />
    });

    return (
        <div className={classes.SightningsList}>
            {sightings}
        </div>
    );
}

export default sightingsList;