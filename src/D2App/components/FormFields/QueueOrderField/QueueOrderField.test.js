import React from 'react';
import { mount } from 'enzyme';
import { ReactFinalForm, CircularLoader } from '@dhis2/ui';
import { useQueueables } from '../../../hooks/queueables';
import QueueOrderField from './QueueOrderField';
const {
  Form
} = ReactFinalForm;
jest.mock('../../../hooks/queueables', () => ({
  useQueueables: jest.fn()
}));
afterEach(() => {
  jest.resetAllMocks();
});
describe('<QueueOrderField>', () => {
  it('should show a loading spinner when loading', () => {
    useQueueables.mockImplementation(() => ({
      loading: true,
      error: undefined,
      data: null
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, _ref => {
      let {
        handleSubmit
      } = _ref;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React.createElement(QueueOrderField, null));
    }));
    expect(wrapper.find(CircularLoader).exists()).toBe(true);
  });
  it('should display any loading errors', () => {
    useQueueables.mockImplementation(() => ({
      loading: false,
      error: new Error('Something went wrong'),
      data: null
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, _ref2 => {
      let {
        handleSubmit
      } = _ref2;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React.createElement(QueueOrderField, null));
    }));
    expect(wrapper.contains('Something went wrong whilst fetching the queueable jobs')).toBe(true);
  });
});