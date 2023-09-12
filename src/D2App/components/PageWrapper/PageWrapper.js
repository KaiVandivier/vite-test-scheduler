import React from 'react';
import PropTypes from 'prop-types';
import styles from './PageWrapper.module.css';
const PageWrapper = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: styles.wrapper
  }, children);
};
const {
  node
} = PropTypes;
PageWrapper.propTypes = {
  children: node.isRequired
};
export default PageWrapper;