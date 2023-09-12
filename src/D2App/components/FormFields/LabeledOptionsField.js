function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelectFieldFF, ReactFinalForm, MultiSelectField } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { useParameterOption } from '../../hooks/parameter-options';
const {
  Field
} = ReactFinalForm;

// A labeled options field has options that have both an id and a label.
const LabeledOptionsField = _ref => {
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
  const labeledOptions = data.map(_ref2 => {
    let {
      id,
      displayName
    } = _ref2;
    return {
      value: id,
      label: displayName
    };
  });
  return /*#__PURE__*/React.createElement(Field, {
    name: name,
    component: MultiSelectFieldFF,
    options: labeledOptions,
    label: label
  });
};
const {
  string
} = PropTypes;
LabeledOptionsField.propTypes = {
  label: string.isRequired,
  name: string.isRequired,
  parameterName: string.isRequired
};
export default LabeledOptionsField;