import React from 'react';
import { mount } from 'enzyme';
import { ReactFinalForm } from '@dhis2/ui';
import DelayField from './DelayField';
const {
  Form
} = ReactFinalForm;
describe('<DelayField>', () => {
  it('converts a supplied number value to a string', () => {
    const initialValues = {
      delay: 20
    };
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {},
      initialValues: initialValues
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(DelayField, null))));
    const actual = wrapper.find(`input[name="delay"]`).props().value;
    expect(typeof actual).toBe('string');
  });
  it('shows an error for a delay that is too low', () => {
    const expected = 'Number cannot be less than 1 or more than 86400';
    const delay = '0';
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(DelayField, null))));
    wrapper.find('input[name="delay"]').simulate('change', {
      target: {
        value: delay
      }
    }).simulate('blur');
    const actual = wrapper.find({
      'data-test': 'dhis2-uiwidgets-inputfield-validation'
    }).text();
    expect(actual).toEqual(expect.stringMatching(expected));
  });
  it('shows an error for a delay that is too high', () => {
    const expected = 'Number cannot be less than 1 or more than 86400';
    const delay = '86401';
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(DelayField, null))));
    wrapper.find('input[name="delay"]').simulate('change', {
      target: {
        value: delay
      }
    }).simulate('blur');
    const actual = wrapper.find({
      'data-test': 'dhis2-uiwidgets-inputfield-validation'
    }).text();
    expect(actual).toEqual(expect.stringMatching(expected));
  });
  it('does not show an error for a valid delay', () => {
    const delay = '10';
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, () => /*#__PURE__*/React.createElement("form", null, /*#__PURE__*/React.createElement(DelayField, null))));
    wrapper.find('input[name="delay"]').simulate('change', {
      target: {
        value: delay
      }
    }).simulate('blur');
    const actual = wrapper.find({
      'data-test': 'dhis2-uiwidgets-inputfield-validation'
    });
    expect(actual).toHaveLength(0);
  });
  it('shows an error that the field is required on empty values', () => {
    const expected = 'Please provide a value';
    const wrapper = mount( /*#__PURE__*/React.createElement(Form, {
      onSubmit: () => {}
    }, _ref => {
      let {
        handleSubmit
      } = _ref;
      return /*#__PURE__*/React.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/React.createElement(DelayField, null));
    }));

    // Trigger validation
    wrapper.find('form').simulate('submit');
    const actual = wrapper.find({
      'data-test': 'dhis2-uiwidgets-inputfield-validation'
    }).text();
    expect(actual).toEqual(expect.stringMatching(expected));
  });
});