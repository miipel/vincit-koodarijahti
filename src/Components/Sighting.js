import React from 'react';

const sighting = (props) => {
    const sighting = props.sighting;

    return (
        <div>
            <p>{sighting.id}</p>
            <p>{sighting.dateTime}</p>
            <p>{sighting.description}</p>
            <p>{sighting.species}</p>
            <p>{sighting.count}</p>
        </div>
    );
}

export default sighting;