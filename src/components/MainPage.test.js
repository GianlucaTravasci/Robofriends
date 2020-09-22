import { shallow } from 'enzyme';
import React from 'react';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false,
        error: ''
    }
    wrapper = shallow(<MainPage {...mockProps} />);
})

it('render main page without crashing', () => {
    expect(wrapper.debug()).toMatchSnapshot();
}) 
