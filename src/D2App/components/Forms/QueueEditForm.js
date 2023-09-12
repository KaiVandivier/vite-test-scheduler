import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { Button, CircularLoader, Box } from '@dhis2/ui';
import { DiscardFormButton, DeleteQueueButton } from '../Buttons';
import history from '../../services/history';
import { FormErrorBox } from '../FormErrorBox';
import { NameField, CronField, QueueOrderField } from '../FormFields';
import styles from './QueueEditForm.module.css';
const QueueEditForm = _ref => {
  let {
    name,
    handleSubmit,
    pristine,
    submitting,
    submitError,
    hasSubmitErrors,
    initialSelectedValues
  } = _ref;
  // Show a spinner only when submitting
  const Spinner = submitting ? /*#__PURE__*/React.createElement(CircularLoader, {
    small: true
  }) : null;
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "600px"
  }, /*#__PURE__*/React.createElement(NameField, {
    isQueue: true
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(CronField, null)), /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px"
  }, /*#__PURE__*/React.createElement(QueueOrderField, {
    initialSelectedValues: initialSelectedValues
  })), hasSubmitErrors && /*#__PURE__*/React.createElement(Box, {
    marginTop: "32px",
    maxWidth: "600px"
  }, /*#__PURE__*/React.createElement(FormErrorBox, {
    title: i18n.t('Something went wrong whilst updating your queue'),
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
  }, /*#__PURE__*/React.createElement(DeleteQueueButton, {
    name: name,
    onSuccess: () => {
      history.push('/');
    }
  }))));
};
const {
  func,
  bool,
  array,
  string
} = PropTypes;
QueueEditForm.defaultProps = {
  submitError: []
};
QueueEditForm.propTypes = {
  handleSubmit: func.isRequired,
  hasSubmitErrors: bool.isRequired,
  name: string.isRequired,
  pristine: bool.isRequired,
  submitting: bool.isRequired,
  initialSelectedValues: array,
  submitError: array
};
export default QueueEditForm;