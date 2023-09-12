import React from 'react';
import { mount } from 'enzyme';
import { ReactFinalForm } from '@dhis2/ui';
import { useJobTypes } from '../../hooks/job-types';
import JobTypeField from './JobTypeField';
const {
  Form
} = ReactFinalForm;
jest.mock('../../hooks/job-types', () => ({
  useJobTypes: jest.fn()
}));
afterEach(() => {
  jest.resetAllMocks();
});
describe('<JobTypeField>', () => {
  it('shows an error that the field is required on empty values', () => {
    useJobTypes.mockImplementation(() => ({
      loading: false,
      error: undefined,
      data: [{
        jobType: 'ANALYTICS_TABLE'
      }]
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, _ref => {
      let {
        handleSubmit
      } = _ref;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React.createElement(JobTypeField, null));
    }));

    // Trigger validation
    wrapper.find('form').simulate('submit');
    const actual = wrapper.find({
      'data-test': 'dhis2-uiwidgets-singleselectfield-validation'
    }).text();
    expect(actual).toEqual(expect.stringContaining('Please provide a value'));
  });
});