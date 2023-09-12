import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDataMutation } from '@dhis2/app-runtime';
import { Button, Modal, ModalContent, ModalActions, ButtonStrip, NoticeBox } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
const RunJobModal = _ref => {
  let {
    id,
    hideModal,
    onComplete
  } = _ref;
  const [mutation] = useState({
    resource: `jobConfigurations/${id}/execute`,
    type: 'create'
  });
  const [runJob, {
    loading,
    error
  }] = useDataMutation(mutation, {
    onComplete: () => {
      hideModal();
      onComplete();
    }
  });
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    small: true,
    onClose: hideModal
  }, /*#__PURE__*/React.createElement(ModalContent, null, error && /*#__PURE__*/React.createElement(NoticeBox, {
    error: true,
    title: i18n.t('Error running job')
  }, error.message), /*#__PURE__*/React.createElement("p", null, i18n.t('Are you sure you want to run this job?'))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    name: "hide-modal",
    secondary: true,
    onClick: hideModal,
    disabled: loading
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    name: `run-job-${id}`,
    primary: true,
    onClick: runJob,
    loading: loading
  }, i18n.t('Run')))));
};
const {
  func,
  string
} = PropTypes;
RunJobModal.propTypes = {
  hideModal: func.isRequired,
  id: string.isRequired,
  onComplete: func.isRequired
};
export default RunJobModal;