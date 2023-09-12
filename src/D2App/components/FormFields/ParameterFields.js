function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import { NoticeBox, ReactFinalForm, InputFieldFF, Box, SwitchFieldFF } from '@dhis2/ui';
import { useJobTypeParameters } from '../../hooks/job-types';
import { formatToString } from './formatters';
import SkipTableTypesField from './SkipTableTypesField';
import LabeledOptionsField from './LabeledOptionsField';
import DataIntegrityChecksField from './DataIntegrityChecksField';
import DataIntegrityReportTypeField from './DataIntegrityReportTypeField';
import styles from './ParameterFields.module.css';
import AggregatedDataExchangeField from './AggregatedDataExchangeField';
const {
  Field
} = ReactFinalForm;

// The key under which the parameters will be sent to the backend
const FIELD_NAME = 'jobParameters';
const JOB_TYPES = {
  DATA_INTEGRITY: 'DATA_INTEGRITY',
  AGGREGATE_DATA_EXCHANGE: 'AGGREGATE_DATA_EXCHANGE'
};
const getCustomComponent = (jobType, parameterName) => {
  if (jobType === JOB_TYPES.DATA_INTEGRITY && parameterName === 'checks') {
    return DataIntegrityChecksField;
  } else if (jobType === JOB_TYPES.DATA_INTEGRITY && parameterName === 'type') {
    return DataIntegrityReportTypeField;
  } else if (jobType === JOB_TYPES.AGGREGATE_DATA_EXCHANGE) {
    return AggregatedDataExchangeField;
  } else if (parameterName === 'skipTableTypes') {
    return SkipTableTypesField;
  }
  return null;
};

// Renders all parameters for a given jobtype
const ParameterFields = _ref => {
  let {
    jobType
  } = _ref;
  const {
    loading,
    error,
    data
  } = useJobTypeParameters(jobType);
  if (loading) {
    return null;
  }
  if (error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('There was a problem fetching parameters')
    });
  }
  if (data.length === 0) {
    return null;
  }

  // Map all parameters to the appropriate field types
  const parameterComponents = data.map(_ref2 => {
    let {
      fieldName,
      name,
      klass,
      ...rest
    } = _ref2;
    const defaultProps = {
      label: fieldName,
      name: `${FIELD_NAME}.${name}`
    };
    const parameterProps = {
      fieldName,
      name,
      klass,
      ...rest
    };
    let parameterComponent = null;
    const CustomParameterComponent = getCustomComponent(jobType, name);
    if (CustomParameterComponent) {
      return /*#__PURE__*/React.createElement(Box, {
        marginTop: "16px",
        key: name
      }, /*#__PURE__*/React.createElement(CustomParameterComponent, _extends({}, parameterProps, defaultProps, {
        parameterName: name
      })));
    }

    // Generic field rendering
    switch (klass) {
      case 'java.lang.String':
        parameterComponent = /*#__PURE__*/React.createElement(Field, _extends({}, defaultProps, {
          component: InputFieldFF,
          type: "text"
        }));
        break;
      case 'java.lang.Boolean':
        parameterComponent = /*#__PURE__*/React.createElement(Field, _extends({}, defaultProps, {
          component: SwitchFieldFF,
          type: "checkbox"
        }));
        break;
      case 'java.lang.Integer':
        parameterComponent = /*#__PURE__*/React.createElement(Field, _extends({}, defaultProps, {
          component: InputFieldFF,
          format: formatToString,
          type: "number"
        }));
        break;
      case 'java.util.List':
        parameterComponent = /*#__PURE__*/React.createElement(LabeledOptionsField, _extends({}, defaultProps, {
          parameterName: name
        }));
        break;
    }

    // Wrap all components in a Box for spacing
    return /*#__PURE__*/React.createElement(Box, {
      marginTop: "16px",
      key: name
    }, parameterComponent);
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("h4", {
    className: styles.headerTitle
  }, i18n.t('Parameters'))), parameterComponents);
};
const {
  string
} = PropTypes;
ParameterFields.propTypes = {
  jobType: string.isRequired
};
export default ParameterFields;