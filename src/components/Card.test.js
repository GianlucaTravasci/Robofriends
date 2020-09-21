import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Card from './Card';

it('renders without crashing', () => {
  const wrapper = shallow(<Card />)
  console.log(wrapper)
  expect(wrapper).toMatchSnapshot();
});
