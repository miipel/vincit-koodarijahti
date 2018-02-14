import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SightingForm from './SightingForm';
import SightingInput from './SightingInput';

configure({adapter: new Adapter()});

describe('<SightingForm />', () => {
  it('should render a form with four different inputs and a submit button', () => {
    const wrapper = shallow(<SightingForm />);
    expect(wrapper.find(SightingInput)).toHaveLength(4);
  });
});