import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson  } from 'enzyme-to-json';

import Card from './Card';

it('renders without crashing', () => {
  const wrapper = shallow(<Card />)
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});
