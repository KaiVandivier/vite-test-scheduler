import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { DeleteQueueModal } from '../Modal';
const DeleteQueueButton = _ref => {
  let {
    name,
    onSuccess
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    destructive: true,
    onClick: () => setShowModal(true)
  }, i18n.t('Delete queue')), showModal && /*#__PURE__*/React.createElement(DeleteQueueModal, {
    name: name,
    hideModal: () => setShowModal(false),
    onSuccess: onSuccess
  }));
};
const {
  string,
  func
} = PropTypes;
DeleteQueueButton.propTypes = {
  name: string.isRequired,
  onSuccess: func.isRequired
};
export default DeleteQueueButton;