import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalContent, ModalActions, ButtonStrip } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import history from '../../services/history';
const DiscardFormModal = _ref => {
  let {
    hideModal
  } = _ref;
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    small: true,
    onClose: hideModal
  }, /*#__PURE__*/React.createElement(ModalContent, null, i18n.t('Are you sure you want to discard this form?')), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    name: "cancel-discard-form",
    secondary: true,
    onClick: hideModal
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    name: "discard-form",
    destructive: true,
    onClick: () => {
      hideModal();
      history.push('/');
    }
  }, i18n.t('Discard')))));
};
const {
  func
} = PropTypes;
DiscardFormModal.propTypes = {
  hideModal: func.isRequired
};
export default DiscardFormModal;