import React from 'react';
import { ReactFinalForm, InputFieldFF, composeValidators, hasValue, string } from '@dhis2/ui';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
const {
  Field
} = ReactFinalForm;

// The key under which this field will be sent to the backend
const FIELD_NAME = 'name';

// Validation
const restrictedNames = value => {
  if (typeof value !== 'string') {
    return;
  }
  return value.toLowerCase() === 'add' ? i18n.t('Queues can\'t be named "Add" or "add"') : undefined;
};
const defaultValidators = [string, hasValue];
const queueValidators = [...defaultValidators, restrictedNames];
const NameField = _ref => {
  let {
    isQueue
  } = _ref;
  const validators = isQueue ? queueValidators : defaultValidators;
  return /*#__PURE__*/React.createElement(Field, {
    name: FIELD_NAME,
    component: InputFieldFF,
    validate: composeValidators(...validators),
    label: i18n.t('Name'),
    type: "text",
    required: true
  });
};
NameField.defaultProps = {
  isQueue: false
};
const {
  bool
} = PropTypes;
NameField.propTypes = {
  isQueue: bool
};
export default NameField;