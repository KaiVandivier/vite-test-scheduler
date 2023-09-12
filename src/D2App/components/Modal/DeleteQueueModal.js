import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalContent, ModalActions, ButtonStrip } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { useDataMutation } from '@dhis2/app-runtime';
const DeleteQueueModal = _ref => {
  let {
    name,
    hideModal,
    onSuccess
  } = _ref;
  const [deleteQueue] = useDataMutation({
    resource: `scheduler/queues/${name}`,
    type: 'delete'
  });
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    small: true,
    onClose: hideModal
  }, /*#__PURE__*/React.createElement(ModalContent, null, i18n.t('Are you sure you want to delete this queue?')), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    name: "hide-modal",
    secondary: true,
    onClick: hideModal
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    name: `delete-queue-${name}`,
    destructive: true,
    onClick: () => {
      deleteQueue().then(() => {
        hideModal();
        onSuccess();
      });
    }
  }, i18n.t('Delete')))));
};
const {
  func,
  string
} = PropTypes;
DeleteQueueModal.propTypes = {
  hideModal: func.isRequired,
  name: string.isRequired,
  onSuccess: func.isRequired
};
export default DeleteQueueModal;