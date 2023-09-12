import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@dhis2/ui';
import history from '../../services/history';
import { DiscardFormModal } from '../Modal';
const DiscardFormButton = _ref => {
  let {
    shouldConfirm,
    children,
    small,
    className
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  const onClick = shouldConfirm ? () => setShowModal(true) : () => history.push('/');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: onClick,
    small: small,
    className: className
  }, children), showModal && /*#__PURE__*/React.createElement(DiscardFormModal, {
    hideModal: /* istanbul ignore next */
    () => setShowModal(false)
  }));
};
DiscardFormButton.defaultProps = {
  className: '',
  shouldConfirm: false,
  small: false
};
const {
  string,
  bool
} = PropTypes;
DiscardFormButton.propTypes = {
  children: string.isRequired,
  className: string,
  shouldConfirm: bool,
  small: bool
};
export default DiscardFormButton;