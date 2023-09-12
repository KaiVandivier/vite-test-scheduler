import React from 'react';
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import { Field, Transfer } from '@dhis2/ui';
import QueueTransferTitle from './QueueTransferTitle';
import CustomOption from './CustomOption';
const {
  bool,
  arrayOf,
  shape,
  func,
  array,
  string
} = PropTypes;
const QueueTransfer = _ref => {
  let {
    options,
    input,
    meta
  } = _ref;
  const {
    onChange,
    value
  } = input;
  const hasError = meta.touched && !!meta.error;
  const errorMessage = hasError ? meta.error : '';
  return /*#__PURE__*/React.createElement(Field, {
    label: i18n.t('Job queue'),
    validationText: errorMessage,
    error: hasError,
    required: true
  }, /*#__PURE__*/React.createElement(Transfer, {
    options: options,
    selected: value,
    renderOption: CustomOption,
    filterable: true,
    filterPlaceholder: i18n.t('Filter jobs'),
    enableOrderChange: true,
    onChange: _ref2 => {
      let {
        selected
      } = _ref2;
      return onChange(selected);
    },
    leftHeader: /*#__PURE__*/React.createElement(QueueTransferTitle, {
      title: i18n.t('Available jobs')
    }),
    rightHeader: /*#__PURE__*/React.createElement(QueueTransferTitle, {
      title: i18n.t('Jobs in this queue')
    })
  }));
};
QueueTransfer.propTypes = {
  input: shape({
    onChange: func.isRequired,
    value: array.isRequired
  }).isRequired,
  meta: shape({
    error: string,
    touched: bool
  }).isRequired,
  options: arrayOf(shape({
    name: string,
    id: string,
    type: string
  })).isRequired
};
export default QueueTransfer;