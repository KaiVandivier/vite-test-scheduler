import React from 'react';
import PropTypes from 'prop-types';
import i18n from '@dhis2/d2-i18n';
import moment from 'moment';
import { jobStatusMap } from '../../services/server-translations';
import styles from './JobDetails.module.css';
const JobDetails = _ref => {
  let {
    created,
    lastExecutedStatus,
    lastExecuted
  } = _ref;
  // Using Date.now allows for easier mocking
  const now = Date.now();
  const createdFromNow = moment(created).from(now);
  const translatedStatus = jobStatusMap[lastExecutedStatus];
  const lastRunFromNow = lastExecuted ? moment(lastExecuted).from(now) : '';
  return /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper
  }, /*#__PURE__*/React.createElement("h4", {
    className: styles.title
  }, i18n.t('Job details')), /*#__PURE__*/React.createElement("div", {
    className: styles.details
  }, /*#__PURE__*/React.createElement("div", null, i18n.t('Created {{ createdFromNow }}.', {
    createdFromNow
  })), lastRunFromNow && /*#__PURE__*/React.createElement("div", null, i18n.t('Last run {{ lastRunFromNow }}.', {
    lastRunFromNow
  })), translatedStatus && /*#__PURE__*/React.createElement("div", null, i18n.t('Last run status: {{ translatedStatus }}.', {
    translatedStatus,
    nsSeparator: '>'
  }))));
};
const {
  string
} = PropTypes;
JobDetails.propTypes = {
  created: string.isRequired,
  lastExecutedStatus: string.isRequired,
  lastExecuted: string
};
export default JobDetails;