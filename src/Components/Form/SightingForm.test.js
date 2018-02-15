import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Button } from 'reactstrap';

import SightingForm from './SightingForm';
import SightingInput from './SightingInput';

configure({ adapter: new Adapter() });

describe('<SightingForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SightingForm />);
  });

  it('should render a form with four different inputs', () => {
    expect(wrapper.find(SightingInput)).toHaveLength(4);
  });

  it('should render a form with a submit button when the form is valid', () => {
    wrapper.setProps({ formIsValid: true });
    expect(wrapper.contains([<Button disabled={false}>Add sighting</Button>]));
  });
});

