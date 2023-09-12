import React from 'react';
import { mount } from 'enzyme';
import { ReactFinalForm } from '@dhis2/ui';
import { fieldNames } from '../FormFields';
import JobAddForm from './JobAddForm';
const {
  Form
} = ReactFinalForm;

// Mock components that make network requests
jest.mock('../FormFields/JobTypeField', () => () => /*#__PURE__*/React.createElement("div", {
  "data-test": "job-type-field"
}, "JobTypeField"));
jest.mock('../FormFields/ScheduleField', () => () => /*#__PURE__*/React.createElement("div", {
  "data-test": "schedule-field"
}, "ScheduleField"));
jest.mock('../FormFields/ParameterFields', () => () => /*#__PURE__*/React.createElement("div", {
  "data-test": "parameter-fields"
}, "ParameterFields"));
afterEach(() => {
  jest.resetAllMocks();
});
describe('<JobAddForm>', () => {
  it('shows submit errors if there are any', () => {
    const message = 'Generic submit error';
    const props = {
      handleSubmit: () => {},
      pristine: false,
      submitting: false,
      submitError: [message],
      hasSubmitErrors: true,
      values: {}
    };
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement(JobAddForm, props)));
    const actual = wrapper.find({
      'data-test': 'dhis2-uicore-noticebox-content-message'
    });
    expect(actual).toHaveLength(1);
    expect(actual.text()).toEqual(expect.stringContaining(message));
  });
  it('shows a spinner when submitting', () => {
    const props = {
      handleSubmit: () => {},
      pristine: false,
      submitting: true,
      submitError: [],
      hasSubmitErrors: false,
      values: {}
    };
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement(JobAddForm, props)));
    const submitButton = wrapper.find({
      'data-test': 'dhis2-uicore-button',
      type: 'submit'
    });
    const circularLoader = submitButton.find({
      'data-test': 'dhis2-uicore-circularloader'
    });
    const progressBar = submitButton.find({
      role: 'progressbar'
    });
    expect(circularLoader).toHaveLength(1);
    expect(progressBar).toHaveLength(1);
  });
  it('shows the schedule field when a jobtype is selected', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {},
      component: JobAddForm,
      initialValues: {
        [fieldNames.JOB_TYPE]: 'jobType'
      }
    }));
    const actual = wrapper.find({
      'data-test': 'schedule-field'
    });
    expect(actual).toHaveLength(1);
  });
  it('shows the parameter fields when a jobtype is selected', () => {
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {},
      component: JobAddForm,
      initialValues: {
        [fieldNames.JOB_TYPE]: 'jobType'
      }
    }));
    const actual = wrapper.find({
      'data-test': 'parameter-fields'
    });
    expect(actual).toHaveLength(1);
  });
  it('disables the submit button when pristine', () => {
    const props = {
      handleSubmit: () => {},
      pristine: true,
      submitting: false,
      submitError: [],
      hasSubmitErrors: false,
      values: {}
    };
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement(JobAddForm, props)));
    const actual = wrapper.find('button').find({
      'data-test': 'dhis2-uicore-button',
      type: 'submit',
      disabled: true
    });
    expect(actual).toHaveLength(1);
  });
  it('disables the submit button when submitting', () => {
    const props = {
      handleSubmit: () => {},
      pristine: false,
      submitting: true,
      submitError: [],
      hasSubmitErrors: false,
      values: {}
    };
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement(JobAddForm, props)));
    const actual = wrapper.find('button').find({
      'data-test': 'dhis2-uicore-button',
      type: 'submit',
      disabled: true
    });
    expect(actual).toHaveLength(1);
  });
});