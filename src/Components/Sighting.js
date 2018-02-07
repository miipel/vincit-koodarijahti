import React from 'react';
import moment from 'moment';

const sighting = (props) => {
    
    const sighting = props.sighting;
    moment.locale();
    const dateTime = moment(sighting.dateTime).format('lll');


    return (
        <tr>
            <td>{dateTime}</td>
            <td>{sighting.species}</td>
            <td>{sighting.count}</td>
            <td>{sighting.description}</td>
        </tr>
    );
}

export default sighting;