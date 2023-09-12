import React from 'react';
import PropTypes from 'prop-types';
import { Card, IconInfo16, Box, SingleSelectField, SingleSelectOption, InputField } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { LinkButton } from '../../components/LinkButton';
import { JobDetails } from '../../components/JobDetails';
import translateCron from '../../services/translate-cron';
import { jobTypesMap } from '../../services/server-translations';
import styles from './JobView.module.css';
const infoLink = 'https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html';
const JobView = _ref => {
  let {
    job
  } = _ref;
  const {
    name,
    created,
    lastExecutedStatus,
    lastExecuted,
    jobType,
    cronExpression
  } = job;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: styles.pageHeader
  }, /*#__PURE__*/React.createElement("h2", {
    className: styles.pageHeaderTitle
  }, i18n.t('System job: {{ name }}', {
    name,
    nsSeparator: '>'
  }))), /*#__PURE__*/React.createElement(Card, {
    className: styles.card
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.cardHeader
  }, /*#__PURE__*/React.createElement("h3", {
    className: styles.cardHeaderTitle
  }, i18n.t('Configuration')), /*#__PURE__*/React.createElement("a", {
    href: infoLink,
    className: styles.cardHeaderLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.cardHeaderInfo
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), i18n.t('About job configuration'))), /*#__PURE__*/React.createElement("div", {
    className: styles.jobDetails
  }, /*#__PURE__*/React.createElement(JobDetails, {
    created: created,
    lastExecutedStatus: lastExecutedStatus,
    lastExecuted: lastExecuted
  })), /*#__PURE__*/React.createElement(Box, {
    maxWidth: "600px"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('Name'),
    disabled: true,
    value: name,
    name: "name"
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(SingleSelectField, {
    name: "jobType",
    label: i18n.t('Job type'),
    disabled: true,
    selected: jobType
  }, /*#__PURE__*/React.createElement(SingleSelectOption, {
    value: jobType,
    label: jobTypesMap[jobType]
  }))), /*#__PURE__*/React.createElement(Box, {
    marginTop: "16px",
    maxWidth: "400px"
  }, /*#__PURE__*/React.createElement(InputField, {
    label: i18n.t('CRON Expression'),
    name: "cronExpression",
    disabled: true,
    value: cronExpression,
    helpText: translateCron(cronExpression)
  })), /*#__PURE__*/React.createElement(Box, {
    marginTop: "24px"
  }, /*#__PURE__*/React.createElement(LinkButton, {
    className: styles.pageHeaderButton,
    to: "/"
  }, i18n.t('Back to all jobs')))));
};
const {
  shape,
  string
} = PropTypes;
JobView.propTypes = {
  job: shape({
    name: string.isRequired,
    created: string.isRequired,
    lastExecutedStatus: string.isRequired,
    lastExecuted: string.isRequired,
    jobType: string.isRequired,
    cronExpression: string.isRequired
  }).isRequired
};
export default JobView;