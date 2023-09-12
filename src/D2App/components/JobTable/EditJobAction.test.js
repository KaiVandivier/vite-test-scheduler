import React from 'react';
import { shallow, mount } from 'enzyme';
import history from '../../services/history';
import EditJobAction from './EditJobAction';
jest.mock('../../services/history', () => ({
  push: jest.fn()
}));
describe('<EditJobAction>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(EditJobAction, {
      id: "id"
    }));
  });
  it('calls history.push correctly when MenuItem is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(EditJobAction, {
      id: "id"
    }));
    wrapper.find('a').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/job/id');
  });
});