import React from 'react';
import i18n from '@dhis2/d2-i18n';
import { NoticeBox } from '@dhis2/ui';
import PropTypes from 'prop-types';
import { useJobType } from '../../hooks/job-types';
import CronField from './CronField';
import DelayField from './DelayField';
const ScheduleField = _ref => {
  let {
    jobType
  } = _ref;
  const {
    loading,
    error,
    data
  } = useJobType(jobType);
  if (loading) {
    return null;
  }
  if (error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('There was a problem fetching the required job type')
    });
  }
  const {
    schedulingType
  } = data;
  switch (schedulingType) {
    case 'CRON':
      return /*#__PURE__*/React.createElement(CronField, null);
    case 'FIXED_DELAY':
      return /*#__PURE__*/React.createElement(DelayField, null);
    default:
      // Unrecognised scheduling type
      return null;
  }
};
const {
  string
} = PropTypes;
ScheduleField.propTypes = {
  jobType: string.isRequired
};
export default ScheduleField;