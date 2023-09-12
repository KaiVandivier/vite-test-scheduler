import React from 'react';
import { shallow, mount } from 'enzyme';
import history from '../../services/history';
import DiscardFormButton from './DiscardFormButton';
jest.mock('../../services/history', () => ({
  push: jest.fn()
}));
describe('<DiscardFormButton>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(DiscardFormButton, {
      shouldConfirm: false
    }, "Discard"));
  });
  it('renders without errors when small', () => {
    shallow( /*#__PURE__*/React.createElement(DiscardFormButton, {
      shouldConfirm: false,
      small: true
    }, "Discard"));
  });
  it('applies className correctly', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(DiscardFormButton, {
      shouldConfirm: false,
      className: "className"
    }, "Discard"));
    const buttonProps = wrapper.find('Button').props();
    expect(buttonProps).toEqual(expect.objectContaining({
      className: 'className'
    }));
  });
  it('shows the modal when it should confirm and button is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(DiscardFormButton, {
      shouldConfirm: true
    }, "Discard"));
    expect(wrapper.find('DiscardFormModal')).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('DiscardFormModal')).toHaveLength(1);
  });
  it('changes route when it should not confirm and button is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(DiscardFormButton, null, "Discard"));
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/');
  });
});