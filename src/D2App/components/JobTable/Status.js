import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from '@dhis2/ui';
import { jobStatusMap } from '../../services/server-translations';
const Status = _ref => {
  let {
    status
  } = _ref;
  switch (status) {
    case 'STOPPED':
    case 'DISABLED':
      return /*#__PURE__*/React.createElement(Tag, null, jobStatusMap[status]);
    case 'RUNNING':
    case 'NOT_STARTED':
    case 'SCHEDULED':
      return /*#__PURE__*/React.createElement(Tag, {
        neutral: true
      }, jobStatusMap[status]);
    case 'FAILED':
      return /*#__PURE__*/React.createElement(Tag, {
        negative: true
      }, jobStatusMap[status]);
    case 'DONE':
      return /*#__PURE__*/React.createElement(Tag, {
        positive: true
      }, jobStatusMap[status]);
    // Unrecognised status
    default:
      return null;
  }
};
const {
  string
} = PropTypes;
Status.propTypes = {
  status: string.isRequired
};
export default Status;