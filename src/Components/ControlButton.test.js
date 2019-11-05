import {shallow} from 'enzyme';
import React from 'react';
import ControlButtons from './ControlButtons'

it('renders without crashing', () => {
  const wrapper = shallow(<ControlButtons />);
  expect(wrapper.find('.left-btn')).toHaveLength(1);
  expect(wrapper.find('.right-btn')).toHaveLength(1);
});