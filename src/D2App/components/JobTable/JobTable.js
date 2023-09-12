import React from 'react';
import { Table, TableHead, TableRowHead, TableRow, TableCell, TableCellHead, TableBody } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import PropTypes from 'prop-types';
import JobTableRow from './JobTableRow';
const JobTable = _ref => {
  let {
    jobs,
    refetch
  } = _ref;
  return /*#__PURE__*/React.createElement(Table, null, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRowHead, null, /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('Job name')), /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('Type')), /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('Schedule')), /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('Next run')), /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('Status')), /*#__PURE__*/React.createElement(TableCellHead, null, i18n.t('On/off')), /*#__PURE__*/React.createElement(TableCellHead, null))), /*#__PURE__*/React.createElement(TableBody, null, jobs.length === 0 ? /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, i18n.t('No jobs to display'))) : jobs.map(job => /*#__PURE__*/React.createElement(JobTableRow, {
    key: job.id,
    job: job,
    refetch: refetch
  }))));
};
const {
  arrayOf,
  object,
  func
} = PropTypes;
JobTable.propTypes = {
  jobs: arrayOf(object).isRequired,
  refetch: func.isRequired
};
export default JobTable;