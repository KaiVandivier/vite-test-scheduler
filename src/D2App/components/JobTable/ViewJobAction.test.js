import React from 'react';
import { shallow, mount } from 'enzyme';
import history from '../../services/history';
import ViewJobAction from './ViewJobAction';
jest.mock('../../services/history', () => ({
  push: jest.fn()
}));
describe('<ViewJobAction>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(ViewJobAction, {
      id: "id"
    }));
  });
  it('calls history.push correctly when MenuItem is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(ViewJobAction, {
      id: "id"
    }));
    wrapper.find('a').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/job/id');
  });
});