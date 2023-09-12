function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import { FieldGroup, CircularLoader, NoticeBox, Radio, Transfer, TransferOption, ReactFinalForm, InputFieldFF, Help } from '@dhis2/ui';
import cx from 'classnames';
import { useParameterOption } from '../../hooks/parameter-options';
import { severityMap } from '../../services/server-translations/dataIntegrityChecks';
import styles from './DataIntegrityChecksField.module.css';
const {
  Field,
  useField
} = ReactFinalForm;
const VALIDATOR = value => {
  // should not validate when null or undefined
  // means "Run all" is selected
  if (!value == null) {
    return undefined;
  }
  if (value && value.length < 1) {
    return i18n.t('Please select checks to run.');
  }
};
const DataIntegrityChecksField = _ref => {
  let {
    label,
    name
  } = _ref;
  const {
    loading,
    error,
    data
  } = useParameterOption('dataIntegrityChecks');
  const {
    input: {
      value,
      onChange
    }
  } = useField(name);
  const hasValue = !!value && value.length > 0;
  const [runSelected, setRunSelected] = useState(hasValue);
  if (loading) {
    return /*#__PURE__*/React.createElement(CircularLoader, null);
  }
  if (error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Something went wrong whilst fetching options')
    });
  }
  const translatedOptions = data.map(option => ({
    ...option,
    value: option.name,
    label: option.displayName,
    severity: severityMap[option.severity]
  })).sort((a, b) => a.label.localeCompare(b.label));
  const toggle = _ref2 => {
    let {
      value
    } = _ref2;
    const runSelectedChecked = value === 'true';
    if (!runSelectedChecked) {
      // clear checks when "Run all" is selected
      // null means all checks will be run
      onChange(null);
    } else {
      // set to empty array explicitly,
      // this is to allow to differentiate between "selected checks" but empty
      // and "run all"-empty for validation
      onChange([]);
    }
    setRunSelected(runSelectedChecked);
  };
  return /*#__PURE__*/React.createElement(FieldGroup, {
    label: i18n.t('Checks to run')
  }, /*#__PURE__*/React.createElement(Radio, {
    name: 'checksToRun',
    value: 'false',
    label: i18n.t('Run all available checks'),
    checked: !runSelected,
    onChange: toggle
  }), /*#__PURE__*/React.createElement(Radio, {
    name: 'checksToRun',
    value: 'true',
    label: i18n.t('Only run selected checks'),
    checked: runSelected,
    onChange: toggle
  }), /*#__PURE__*/React.createElement(Field, {
    name: name,
    component: ChecksTransfer,
    options: translatedOptions,
    label: label,
    validate: VALIDATOR
    // conditional rendering of FinalForm-fields cause some issues,
    // see https://github.com/final-form/react-final-form/issues/809
    ,
    hidden: !runSelected
  }));
};
const LabelComponent = _ref3 => {
  let {
    label,
    severity,
    highlighted,
    disabled
  } = _ref3;
  return /*#__PURE__*/React.createElement("div", {
    className: cx(styles.transferOption, {
      [styles.highlighted]: highlighted,
      [styles.disabled]: disabled
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.optionName
  }, label), /*#__PURE__*/React.createElement("div", {
    className: cx(styles.optionSeverity, {
      [styles.highlighted]: highlighted
    })
  }, `${i18n.t('Severity')}: ${severity}`));
};
LabelComponent.propTypes = TransferOption.propTypes;
const renderOption = option => /*#__PURE__*/React.createElement(TransferOption, _extends({}, option, {
  label: /*#__PURE__*/React.createElement(LabelComponent, option)
}));
const ChecksTransfer = _ref4 => {
  let {
    input,
    meta,
    options = [],
    hidden
  } = _ref4;
  const {
    onChange
  } = input;
  const handleChange = useCallback(_ref5 => {
    let {
      selected
    } = _ref5;
    onChange(selected);
  }, [onChange]);
  if (hidden) {
    return null;
  }
  const isErr = meta.touched && meta.invalid;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Transfer, {
    options: options,
    onChange: handleChange,
    selected: input.value || [],
    renderOption: renderOption,
    maxSelections: Infinity,
    enableOrderChange: true,
    filterable: true,
    height: '450px',
    selectedEmptyComponent: /*#__PURE__*/React.createElement(SelectedEmptyComponent, null),
    className: styles.transfer
  }), isErr && /*#__PURE__*/React.createElement(Help, {
    error: isErr
  }, meta.error));
};
ChecksTransfer.propTypes = InputFieldFF.propTypes;
const SelectedEmptyComponent = () => /*#__PURE__*/React.createElement("p", {
  className: styles.selectedEmptyComponent
}, i18n.t('Select checks to run.'));
const {
  string
} = PropTypes;
DataIntegrityChecksField.propTypes = {
  label: string.isRequired,
  name: string.isRequired
};
export default DataIntegrityChecksField;