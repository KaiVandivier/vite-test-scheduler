import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableCell } from '@dhis2/ui';
import { jobTypesMap } from '../../services/server-translations';
import { ToggleJobSwitch } from '../Switches';
import Actions from './Actions';
import Status from './Status';
import NextRun from './NextRun';
import Schedule from './Schedule';
const JobTableRow = _ref => {
  let {
    job: {
      id,
      name,
      type,
      cronExpression,
      delay,
      status,
      nextExecutionTime,
      enabled,
      configurable
    },
    refetch
  } = _ref;
  return /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, {
    role: "rowheader"
  }, name), /*#__PURE__*/React.createElement(TableCell, null, jobTypesMap[type]), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Schedule, {
    cronExpression: cronExpression,
    delay: delay
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(NextRun, {
    nextExecutionTime: nextExecutionTime,
    enabled: enabled
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Status, {
    status: status
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(ToggleJobSwitch, {
    id: id,
    checked: enabled,
    disabled: !configurable,
    refetch: refetch
  })), /*#__PURE__*/React.createElement(TableCell, null, /*#__PURE__*/React.createElement(Actions, {
    id: id,
    enabled: enabled,
    configurable: configurable,
    refetch: refetch
  })));
};
const {
  shape,
  string,
  bool,
  number,
  func
} = PropTypes;
JobTableRow.propTypes = {
  job: shape({
    name: string.isRequired,
    enabled: bool.isRequired,
    id: string.isRequired,
    status: string.isRequired,
    type: string.isRequired,
    cronExpression: string,
    delay: number,
    nextExecutionTime: string
  }).isRequired,
  refetch: func.isRequired
};
export default JobTableRow;