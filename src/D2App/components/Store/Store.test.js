import React from 'react';
import { shallow } from 'enzyme';
import Store from './Store';
describe('<Store>', () => {
  it('renders the children', () => {
    const wrapper = shallow( /*#__PURE__*/React.createElement(Store, null, "Child"));
    expect(wrapper.text()).toEqual(expect.stringContaining('Child'));
  });
});