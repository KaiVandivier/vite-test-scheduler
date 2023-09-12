import React from 'react';
import PropTypes from 'prop-types';
import { NoticeBox } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { useDataQuery } from '@dhis2/app-runtime';
import { Spinner } from '../Spinner';
import { getAuthorized } from './selectors';
import styles from './AuthWall.module.css';
const query = {
  me: {
    resource: 'me'
  }
};
const AuthWall = _ref => {
  let {
    children
  } = _ref;
  const {
    loading,
    error,
    data
  } = useDataQuery(query);
  if (loading) {
    return /*#__PURE__*/React.createElement(Spinner, null);
  }
  if (error) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.noticeBoxWrapper
    }, /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Something went wrong')
    }, i18n.t('Something went wrong whilst retrieving user permissions.')));
  }
  const isAuthorized = getAuthorized(data.me);
  if (!isAuthorized) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.noticeBoxWrapper
    }, /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Not authorized')
    }, i18n.t("You don't have access to the Job Scheduler. Contact a system administrator to request access.")));
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, children);
};
const {
  node
} = PropTypes;
AuthWall.propTypes = {
  children: node.isRequired
};
export default AuthWall;