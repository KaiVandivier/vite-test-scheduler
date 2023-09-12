import React from 'react';
import { Card, IconInfo16 } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { QueueAddFormContainer } from '../../components/Forms';
import styles from './QueueAdd.module.css';
const QueueAdd = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: styles.pageHeader
  }, /*#__PURE__*/React.createElement("h2", {
    className: styles.pageHeaderTitle
  }, i18n.t('New queue'))), /*#__PURE__*/React.createElement(Card, {
    className: styles.card
  }, /*#__PURE__*/React.createElement("header", {
    className: styles.cardHeader
  }, /*#__PURE__*/React.createElement("h3", {
    className: styles.cardHeaderTitle
  }, i18n.t('Configuration')), /*#__PURE__*/React.createElement("span", {
    className: styles.cardHeaderInfo
  }, /*#__PURE__*/React.createElement("span", {
    className: styles.cardHeaderIcon
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), i18n.t('A queue is a collection of jobs that are executed in order, one after another as they finish.'))), /*#__PURE__*/React.createElement(QueueAddFormContainer, null)));
};
export default QueueAdd;