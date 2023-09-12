import React from 'react';
import { Card, IconInfo16 } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { JobAddFormContainer } from '../../components/Forms';
import styles from './JobAdd.module.css';
const infoLink = 'https://docs.dhis2.org/en/use/user-guides/dhis-core-version-236/maintaining-the-system/scheduling.html';
const JobAdd = () => {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: styles.pageHeader
  }, /*#__PURE__*/React.createElement("h2", {
    className: styles.pageHeaderTitle
  }, i18n.t('New Job'))), /*#__PURE__*/React.createElement(Card, {
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
  }, /*#__PURE__*/React.createElement(IconInfo16, null)), i18n.t('About job configuration'))), /*#__PURE__*/React.createElement(JobAddFormContainer, null)));
};
export default JobAdd;