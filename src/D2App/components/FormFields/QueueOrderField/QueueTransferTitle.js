import React from 'react';
import PropTypes from 'prop-types';
import s from './QueueTransferTitle.module.css';
const QueueTransferTitle = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/React.createElement("h4", {
    className: s.header
  }, title);
};
QueueTransferTitle.propTypes = {
  title: PropTypes.string.isRequired
};
export default QueueTransferTitle;