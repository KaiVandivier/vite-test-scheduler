import React from 'react';
import { NoticeBox, Card, Checkbox, InputField, IconInfo16 } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { useJobsAndQueues } from '../../hooks/jobs-and-queues';
import { useJobFilter, useShowSystemJobs } from '../../components/Store';
import { JobTable } from '../../components/JobTable';
import { LinkButton } from '../../components/LinkButton';
import { Spinner } from '../../components/Spinner';
import styles from './JobList.module.css';
import filterJobs from './filter-jobs';
const infoLink = 'https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html';
const JobList = () => {
  const [jobFilter, setJobFilter] = useJobFilter();
  const [showSystemJobs, setShowSystemJobs] = useShowSystemJobs();
  const {
    data,
    loading,
    error,
    refetch
  } = useJobsAndQueues();
  if (loading) {
    return /*#__PURE__*/React.createElement(Spinner, null);
  }
  if (error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Could not load jobs')
    }, i18n.t('Something went wrong whilst loading the jobs. Try refreshing the page.'));
  }

  // Apply the current filter settings
  const jobs = filterJobs({
    jobFilter,
    showSystemJobs,
    jobs: data
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: styles.header
  }, /*#__PURE__*/React.createElement("h1", {
    className: styles.headerTitle
  }, i18n.t('Scheduled jobs')), /*#__PURE__*/React.createElement("a", {
    href: infoLink,
    className: styles.headerLink,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.headerLinkIcon
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), i18n.t('About job configuration'))), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("div", {
    className: styles.controlContainer
  }, /*#__PURE__*/React.createElement(InputField, {
    dataTest: "job-filter-input",
    label: i18n.t('Filter jobs'),
    onChange: _ref => {
      let {
        value
      } = _ref;
      setJobFilter(value);
    },
    value: jobFilter,
    type: "search",
    role: "searchbox",
    name: "job-filter"
  }), /*#__PURE__*/React.createElement("div", {
    className: styles.controlRight
  }, /*#__PURE__*/React.createElement(Checkbox, {
    dataTest: "job-toggle-checkbox",
    checked: showSystemJobs,
    label: i18n.t('Include system jobs in list'),
    onChange: _ref2 => {
      let {
        checked
      } = _ref2;
      setShowSystemJobs(checked);
    }
  }), /*#__PURE__*/React.createElement(LinkButton, {
    to: "/job/add"
  }, i18n.t('New job')))), /*#__PURE__*/React.createElement(JobTable, {
    jobs: jobs,
    refetch: refetch
  })));
};
export default JobList;