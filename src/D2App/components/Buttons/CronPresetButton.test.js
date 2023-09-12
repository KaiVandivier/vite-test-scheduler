import React from 'react';
import { shallow, mount } from 'enzyme';
import CronPresetButton from './CronPresetButton';
describe('<CronPresetButton>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(CronPresetButton, {
      setCron: () => {}
    }));
  });
  it('renders without errors when small', () => {
    shallow( /*#__PURE__*/React.createElement(CronPresetButton, {
      setCron: () => {},
      small: true
    }));
  });
  it('shows the modal when button is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(CronPresetButton, {
      setCron: () => {}
    }));
    expect(wrapper.find('CronPresetModal')).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('CronPresetModal')).toHaveLength(1);
  });
});