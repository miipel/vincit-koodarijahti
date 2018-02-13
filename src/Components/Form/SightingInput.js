import React from 'react';
import { Label, Input } from 'reactstrap';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

const sightingInput = (props) => {
  let inputElement = null;

  switch (props.type) {
    case ('dateAndTime'):
      inputElement = <DateTimePicker
        id="inputElement"
        required
        defaultValue={new Date()}
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('text'):
      inputElement = <Input
        id="inputElement"
        required
        type='text'
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('number'):
      inputElement = <Input
        id="inputElement"
        required
        type='number'
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    case ('textarea'):
      inputElement = <Input
        id="inputElement"
        required
        type='textarea'
        onChange={props.changed}
        value={props.value}
        valid={props.valid} />
      break;
    default:
      inputElement = <Input />

  }

  return (
    <div>
      <Label for="inputElement">{props.label}</Label>
      {inputElement}
    </div>
  );
}

export default sightingInput;