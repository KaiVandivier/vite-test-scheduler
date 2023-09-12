import React from 'react';
import { shallow, mount } from 'enzyme';
import DeleteQueueButton from './DeleteQueueButton';
describe('<DeleteQueueButton>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(DeleteQueueButton, {
      name: "name",
      onSuccess: () => {}
    }));
  });
  it('shows the modal when button is clicked', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(DeleteQueueButton, {
      name: "name",
      onSuccess: () => {}
    }));
    expect(wrapper.find('DeleteQueueModal')).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('DeleteQueueModal')).toHaveLength(1);
  });
});