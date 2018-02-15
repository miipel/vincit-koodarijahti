import React, { Component } from 'react';
import Sighting from './Sighting';
import { Table, Button, ButtonGroup } from 'reactstrap';

import './SightingsList.css';

class SightingsList extends Component {
    state = {
        newestIsFirst: false
    }

    sortDate(a, b, newest) {
        const arg1 = new Date(a.dateTime),
            arg2 = new Date(b.dateTime);
        if (newest) {
            return arg2 - arg1;
        } else {
            return arg1 - arg2;
        }
    }

    render() {
        const sightings = this.props.sightings.sort(
            (a, b) => this.sortDate(a, b, this.state.newestIsFirst)
        )
            .map((sighting, id) => {
                return <Sighting
                    key={id}
                    sighting={sighting} />
            });

        return (
            <div className="SightingsList">
                <h3>
                    Seen{' '}
                    <ButtonGroup>
                        <Button
                            size="sm"
                            onClick={() => this.setState({ newestIsFirst: true })}>
                            Newest first
                        </Button>
                        <Button
                            size="sm"
                            onClick={() => this.setState({ newestIsFirst: false })}>
                            Oldest first
                        </Button>
                    </ButtonGroup>
                </h3>
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
            </div>
        );
    }

}

export default SightingsList;