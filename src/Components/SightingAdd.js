import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import './SightingAdd.css';

const sightingCreate = () => {
  return (
    <div>
      <Form>
        <FormGroup row>
          <Label>Date</Label>
          <Input type='date' />
        </FormGroup>
        <FormGroup row>
          <Label>Time</Label>
          <Input type='time' />
        </FormGroup>
        <FormGroup row>
          <Label>Species</Label>
          <Input type='text' />
        </FormGroup>
        <FormGroup row>
          <Label>Count</Label>
          <Input type='number' />
        </FormGroup>
        <FormGroup row>
          <Label>Description</Label>
          <Input type='textarea' />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}

export default sightingCreate;