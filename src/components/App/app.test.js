// libraries
import React from 'react';
import {shallow} from 'enzyme';

// component
import App from './index';

describe('<App />', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());

    expect(wrapper.length).not.toBe(null);
  });
});
