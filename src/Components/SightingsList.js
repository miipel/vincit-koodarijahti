import React from 'react';
import Sighting from './Sighting';

const sightingsList = (props) => {
    const sightings = props.sightings.map((sighting, id) => {
        return <Sighting 
            key={id}
            sighting={sighting} />
    });

    return (
        <div>
            {sightings}
        </div>
    );
}

export default sightingsList;