import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { DeleteJobModal } from '../Modal';
const DeleteJobButton = _ref => {
  let {
    id,
    onSuccess
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    destructive: true,
    onClick: () => setShowModal(true)
  }, i18n.t('Delete job')), showModal && /*#__PURE__*/React.createElement(DeleteJobModal, {
    id: id,
    hideModal: /* istanbul ignore next */
    () => setShowModal(false),
    onSuccess: onSuccess
  }));
};
const {
  string,
  func
} = PropTypes;
DeleteJobButton.propTypes = {
  id: string.isRequired,
  onSuccess: func.isRequired
};
export default DeleteJobButton;