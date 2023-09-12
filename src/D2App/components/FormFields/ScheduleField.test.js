import React from 'react';
import { mount } from 'enzyme';
import { ReactFinalForm } from '@dhis2/ui';
import { useJobType } from '../../hooks/job-types';
import ScheduleField from './ScheduleField';
const {
  Form
} = ReactFinalForm;
jest.mock('../../hooks/job-types', () => ({
  useJobType: jest.fn()
}));
afterEach(() => {
  jest.resetAllMocks();
});
describe('<ScheduleField>', () => {
  it('renders the cron field if the scheduling type is CRON', () => {
    const props = {
      jobType: 'one'
    };
    useJobType.mockImplementation(() => ({
      loading: false,
      error: undefined,
      data: {
        schedulingType: 'CRON'
      }
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(ScheduleField, props))));
    const component = wrapper.find('CronField');
    expect(component).toHaveLength(1);
  });
  it('renders the delay field if the scheduling type is FIXED_DELAY', () => {
    const props = {
      jobType: 'one'
    };
    useJobType.mockImplementation(() => ({
      loading: false,
      error: undefined,
      data: {
        schedulingType: 'FIXED_DELAY'
      }
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(ScheduleField, props))));
    const component = wrapper.find('DelayField');
    expect(component).toHaveLength(1);
  });
  it('returns null for unrecognised scheduling types', () => {
    const props = {
      jobType: 'one'
    };
    useJobType.mockImplementation(() => ({
      loading: false,
      error: undefined,
      data: {
        schedulingType: 'DOES_NOT_EXIST'
      }
    }));
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(ScheduleField, props))));
    const children = wrapper.find('form').children();
    expect(children.isEmptyRender()).toBe(true);
  });
});