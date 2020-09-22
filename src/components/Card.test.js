import React from 'react';
import { shallow } from 'enzyme';

import Card from './Card';



it('renders without crashing', () => {
  const wrapper = shallow(<Card />)
  const find = wrapper.find('#cardstuff')
  //console.log(find.debug())
  expect(find.debug()).toMatchSnapshot();
});
