import React from 'react';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

Moment.locale('fi');
momentLocalizer();

const sighting = (props) => {
    
    const sighting = props.sighting;
    const dateTime = Moment(sighting.dateTime).format('lll');
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