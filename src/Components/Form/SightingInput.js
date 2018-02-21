import React from 'react';
import { Label, Input } from 'reactstrap';
import { DateTimePicker, DropdownList } from 'react-widgets';

import './SightingInput.css';
import 'react-widgets/dist/css/react-widgets.css';
import 'bootstrap/dist/css/bootstrap.css';

const sightingInput = (props) => {
  let inputElement = null;

  switch (props.type) {
    case ('dateAndTime'):
      inputElement = <DateTimePicker
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('dropDown'):
      inputElement = <DropdownList
        data={props.species}
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('number'):
      inputElement = <Input
        type='number'
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('textarea'):
      inputElement = <Input
        type='textarea'
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    default:
      inputElement = <Input />

  }

  return (
    <div className="input">
      <Label>{props.label}</Label>
      {inputElement}
    </div>
  );
}

export default sightingInput;