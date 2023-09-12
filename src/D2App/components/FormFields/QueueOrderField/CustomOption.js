import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './CustomOption.module.css';
const {
  bool,
  func,
  string
} = PropTypes;
const CustomOption = _ref => {
  let {
    label,
    value,
    type,
    onClick,
    highlighted,
    onDoubleClick
  } = _ref;
  const className = cx(styles.wrapper, {
    [styles.highlighted]: highlighted
  });
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
    React.createElement("div", {
      onClick: event => onClick({
        label,
        value
      }, event),
      onDoubleClick: event => onDoubleClick({
        label,
        value
      }, event),
      className: className,
      "data-value": value,
      "data-test": "dhis2-uicore-transferoption"
    }, /*#__PURE__*/React.createElement("div", {
      className: styles.label
    }, label), /*#__PURE__*/React.createElement("div", {
      className: styles.type
    }, type))
  );
};
CustomOption.propTypes = {
  highlighted: bool.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  value: string.isRequired,
  onClick: func.isRequired,
  onDoubleClick: func.isRequired
};
export default CustomOption;