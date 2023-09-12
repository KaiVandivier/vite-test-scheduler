function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { MultiSelectField, ReactFinalForm, MultiSelectFieldFF } from '@dhis2/ui';
import { analyticsTableTypes } from '../../services/server-translations';
import { useParameterOption } from '../../hooks/parameter-options';
const {
  Field
} = ReactFinalForm;
const SkipTableTypesField = _ref => {
  let {
    label,
    name,
    parameterName
  } = _ref;
  const {
    loading,
    error,
    data
  } = useParameterOption(parameterName);
  const disabledProps = {
    disabled: true,
    label
  };
  if (loading) {
    return /*#__PURE__*/React.createElement(MultiSelectField, _extends({}, disabledProps, {
      helpText: i18n.t('Loading options')
    }));
  }
  if (error) {
    return /*#__PURE__*/React.createElement(MultiSelectField, _extends({}, disabledProps, {
      helpText: i18n.t('Something went wrong whilst loading options')
    }));
  }
  if (data.length === 0) {
    return /*#__PURE__*/React.createElement(MultiSelectField, _extends({}, disabledProps, {
      helpText: i18n.t('No options available')
    }));
  }
  const translatedOptions = data.map(option => ({
    value: option,
    label: analyticsTableTypes[option] || option
  }));
  return /*#__PURE__*/React.createElement(Field, {
    name: name,
    component: MultiSelectFieldFF,
    options: translatedOptions,
    label: label
  });
};
const {
  string
} = PropTypes;
SkipTableTypesField.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  parameterName: string.isRequired
};
export default SkipTableTypesField;