import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { Button, CircularLoader, Box } from '@dhis2/ui';
import history from '../../services/history';
import { DiscardFormButton, DeleteJobButton } from '../Buttons';
import { FormErrorBox } from '../FormErrorBox';
import { ScheduleField, NameField, JobTypeField, ParameterFields, fieldNames } from '../FormFields';
import styles from './JobEditForm.module.css';
const JobEditForm = _ref => {
  let {
    id,
    handleSubmit,
    pristine,
    submitting,
    submitError,
    hasSubmitErrors,
    values
  } = _ref;
  // Check if there's currently a selected job type
  const jobType = values[fieldNames.JOB_TYPE];

  // Show a spinner only when submitting
  const Spinner = submitting ? /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  }) : null;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "600px"
  }, /*#__PURE__*/React.createElement(NameField, null)), /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(JobTypeField, null)), jobType && /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(ScheduleField, {
    jobType: jobType
  })), jobType && /*#__PURE__*/React.createElement(Box, {
    marginTop: "32px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(ParameterFields, {
    jobType: jobType
  })), hasSubmitErrors && /*#__PURE__*/React.createElement(Box, {
    marginTop: "32px",
    maxWidth: "600px"
  }, /*#__PURE__*/React.createElement(FormErrorBox, {
    title: i18n.t('Something went wrong whilst updating your job'),
    submitError: submitError
  })), /*#__PURE__*/React.createElement("div", {
    className: styles.formButtonContainer
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    type: "submit",
    disabled: pristine || submitting,
    icon: Spinner,
    className: styles.saveButton
  }, i18n.t('Save')), /*#__PURE__*/React.createElement(DiscardFormButton, {
    shouldConfirm: !pristine
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement("span", {
    className: styles.deleteButton
  }, /*#__PURE__*/React.createElement(DeleteJobButton, {
    id: id,
    onSuccess: () => {
      history.push('/');
    }
  }))));
};
const {
  func,
  bool,
  object,
  array,
  string
} = PropTypes;
JobEditForm.defaultProps = {
  submitError: []
};
JobEditForm.propTypes = {
  handleSubmit: func.isRequired,
  hasSubmitErrors: bool.isRequired,
  id: string.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  values: object.isRequired,
  submitError: array
};
export default JobEditForm;