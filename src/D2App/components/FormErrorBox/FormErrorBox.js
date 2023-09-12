import React from 'react';
import PropTypes from 'prop-types';
import { NoticeBox } from '@dhis2/ui';
import styles from './FormErrorBox.module.css';
const FormErrorBox = _ref => {
  let {
    submitError,
    title
  } = _ref;
  const hasGenericSubmitErrors = submitError.length > 0;
  if (!hasGenericSubmitErrors) {
    return null;
  }
  return /*#__PURE__*/React.createElement(NoticeBox, {
    error: true,
    title: title
  }, /*#__PURE__*/React.createElement("ul", {
    className: styles.list
  }, submitError.map(error => /*#__PURE__*/React.createElement("li", {
    key: error
  }, error))));
};
const {
  array,
  string
} = PropTypes;
FormErrorBox.propTypes = {
  submitError: array.isRequired,
  title: string.isRequired
};
export default FormErrorBox;