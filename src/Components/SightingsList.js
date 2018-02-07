import React from 'react';
import Sighting from './Sighting';
import { Table } from 'reactstrap';

const sightingsList = (props) => {
    const sightings = props.sightings.map((sighting, id) => {
        return <Sighting
            key={id}
            sighting={sighting} />
    });

    return (
        <Table>
            <thead>
                <tr>
                    <th>Date and time</th>
                    <th>Species</th>
                    <th>Count</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {sightings}
            </tbody>
        </Table>

    );
}

export default sightingsList;