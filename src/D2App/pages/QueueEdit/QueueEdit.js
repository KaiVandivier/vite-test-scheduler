import React from 'react';
import { Card, IconInfo16, NoticeBox } from '@dhis2/ui';
import { useParams } from 'react-router-dom';
import i18n from '@dhis2/d2-i18n';
import { Spinner } from '../../components/Spinner';
import { QueueEditFormContainer } from '../../components/Forms';
import { useQueueByName } from '../../hooks/queues';
import { useJobs } from '../../hooks/jobs';
import styles from './QueueEdit.module.css';
const QueueEdit = () => {
  const {
    name
  } = useParams();
  const queueResult = useQueueByName(name);
  const jobsResult = useJobs();
  if (queueResult.fetching || jobsResult.fetching) {
    return /*#__PURE__*/React.createElement(Spinner, null);
  }
  if (queueResult.error || jobsResult.error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Could not load requested queue')
    }, i18n.t('Something went wrong whilst loading the requested queue. Make sure it has not been deleted and try refreshing the page.'));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: styles.pageHeader
  }, /*#__PURE__*/React.createElement("h2", {
    className: styles.pageHeaderTitle
  }, i18n.t('Queue: {{ name }}', {
    name,
    nsSeparator: '>'
  }))), /*#__PURE__*/React.createElement(Card, {
    className: styles.card
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.cardHeader
  }, /*#__PURE__*/React.createElement("h3", {
    className: styles.cardHeaderTitle
  }, i18n.t('Configuration')), /*#__PURE__*/React.createElement("span", {
    className: styles.cardHeaderInfo
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.cardHeaderIcon
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), i18n.t('A queue is a collection of jobs that are executed in order, one after another as they finish.'))), /*#__PURE__*/React.createElement(QueueEditFormContainer, {
    queue: queueResult.data,
    jobs: jobsResult.data
  })));
};
export default QueueEdit;