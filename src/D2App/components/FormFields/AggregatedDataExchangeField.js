import i18n from '@dhis2/d2-i18n';
import { CircularLoader, NoticeBox, ReactFinalForm, Transfer, Field } from '@dhis2/ui';
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDataQuery } from '@dhis2/app-runtime';
import styles from './AggregatedDataExchangeField.module.css';
const {
  useField
} = ReactFinalForm;
const query = {
  dataExchangeIds: {
    resource: 'aggregateDataExchanges',
    params: {
      fields: ['id', 'displayName'],
      paging: true
    }
  }
};
const validate = value => {
  if (!value || value && value.length < 1) {
    return i18n.t('Please select data exchange ids.');
  }
};
const SelectedEmptyComponent = () => /*#__PURE__*/React.createElement("p", {
  className: styles.selectedEmptyComponent
}, i18n.t('Select data exchange ids'));
const AggregatedDataExchangeField = _ref => {
  var _data$dataExchangeIds, _data$dataExchangeIds2, _meta$error;
  let {
    label,
    name
  } = _ref;
  const {
    loading,
    error,
    data
  } = useDataQuery(query);
  const {
    input,
    meta
  } = useField(name, {
    beforeSubmit: () => !loading || !error,
    validate
  });
  const handleChange = useCallback(_ref2 => {
    let {
      selected
    } = _ref2;
    input === null || input === void 0 ? void 0 : input.onChange(selected);
  }, [input]);
  if (loading) {
    return /*#__PURE__*/React.createElement(CircularLoader, null);
  }
  if (error) {
    var _error$details, _error$details2;
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('There was a problem fetching data exchange ids')
    }, /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("summary", null, `${i18n.t('error type')} - ${error.type}`), ((_error$details = error.details) === null || _error$details === void 0 ? void 0 : _error$details.message) && /*#__PURE__*/React.createElement("p", null, (_error$details2 = error.details) === null || _error$details2 === void 0 ? void 0 : _error$details2.message)));
  }
  const options = (_data$dataExchangeIds = (_data$dataExchangeIds2 = data.dataExchangeIds) === null || _data$dataExchangeIds2 === void 0 ? void 0 : _data$dataExchangeIds2.aggregateDataExchanges.map(exchangeIds => ({
    label: exchangeIds.displayName,
    value: exchangeIds.id
  }))) !== null && _data$dataExchangeIds !== void 0 ? _data$dataExchangeIds : [];
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    validationText: (_meta$error = meta.error) === null || _meta$error === void 0 ? void 0 : _meta$error.message,
    error: !!meta.error,
    name: name,
    required: true,
    className: styles.field
  }, /*#__PURE__*/React.createElement(Transfer, {
    options: options,
    onChange: handleChange,
    selected: (input === null || input === void 0 ? void 0 : input.value) || [],
    maxSelections: Infinity,
    enableOrderChange: true,
    filterable: true,
    height: '450px',
    selectedEmptyComponent: /*#__PURE__*/React.createElement(SelectedEmptyComponent, null)
  }));
};
AggregatedDataExchangeField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
export default AggregatedDataExchangeField;