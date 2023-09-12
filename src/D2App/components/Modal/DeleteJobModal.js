import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalContent, ModalActions, ButtonStrip } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { useDataMutation } from '@dhis2/app-runtime';
const mutation = {
  resource: 'jobConfigurations',
  id: /* istanbul ignore next */_ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'delete'
};
const DeleteJobModal = _ref2 => {
  let {
    id,
    hideModal,
    onSuccess
  } = _ref2;
  const [deleteJob] = useDataMutation(mutation);
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    small: true,
    onClose: hideModal
  }, /*#__PURE__*/React.createElement(ModalContent, null, i18n.t('Are you sure you want to delete this job?')), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    name: "hide-modal",
    secondary: true,
    onClick: hideModal
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    name: `delete-job-${id}`,
    destructive: true,
    onClick: () => {
      deleteJob({
        id
      }).then(() => {
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
DeleteJobModal.propTypes = {
  hideModal: func.isRequired,
  id: string.isRequired,
  onSuccess: func.isRequired
};
export default DeleteJobModal;