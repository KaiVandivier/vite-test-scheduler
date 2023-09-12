function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { ReactFinalForm, SingleSelectFieldFF, SingleSelectField, composeValidators, hasValue, string } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { jobTypesMap } from '../../services/server-translations';
import { useJobTypes } from '../../hooks/job-types';
const {
  Field
} = ReactFinalForm;

// The key under which this field will be sent to the backend
export const FIELD_NAME = 'jobType';
const VALIDATOR = composeValidators(string, hasValue);
const JobTypeField = () => {
  const {
    loading,
    error,
    data
  } = useJobTypes();
  const label = i18n.t('Job type');
  const disabledProps = {
    disabled: true,
    label
  };
  if (loading) {
    return /*#__PURE__*/React.createElement(SingleSelectField, _extends({}, disabledProps, {
      helpText: i18n.t('Loading job types')
    }));
  }
  if (error) {
    return /*#__PURE__*/React.createElement(SingleSelectField, _extends({}, disabledProps, {
      helpText: i18n.t('Something went wrong whilst loading job types')
    }));
  }
  const options = data.map(_ref => {
    let {
      jobType
    } = _ref;
    return {
      value: jobType,
      label: jobTypesMap[jobType]
    };
  }).filter(job => !!job.label).sort((job1, job2) => job1.label.localeCompare(job2.label));
  return /*#__PURE__*/React.createElement(Field, {
    name: FIELD_NAME,
    validate: VALIDATOR,
    component: SingleSelectFieldFF,
    options: options,
    label: label,
    required: true
  });
};
export default JobTypeField;