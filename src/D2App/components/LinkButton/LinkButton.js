function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';
const LinkButton = _ref => {
  let {
    className,
    small,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement(Link, _extends({
    className: cx(styles.linkButton, {
      [styles.small]: small
    }, className)
  }, rest));
};
LinkButton.propTypes = {
  className: PropTypes.string,
  small: PropTypes.bool
};
export default LinkButton;