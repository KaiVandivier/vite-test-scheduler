function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalTitle, ModalContent, ModalActions, ButtonStrip, Radio } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
const cronPresets = [{
  label: i18n.t('Every hour'),
  value: '0 0 * ? * *'
}, {
  label: i18n.t('Every day at midnight'),
  value: '0 0 1 ? * *'
}, {
  label: i18n.t('Every day at 3 am'),
  value: '0 0 3 ? * *'
}, {
  label: i18n.t('Every day at noon'),
  value: '0 0 12 ? * MON-FRI'
}, {
  label: i18n.t('Every week'),
  value: '0 0 3 ? * MON'
}];
const CronPresetModal = _ref => {
  let {
    setCron,
    hideModal
  } = _ref;
  const [currentPreset, setCurrentPreset] = useState('');
  return /*#__PURE__*/React.createElement(Modal, {
    open: true,
    small: true,
    onClose: hideModal
  }, /*#__PURE__*/React.createElement(ModalTitle, null, i18n.t('Choose a preset time/interval')), /*#__PURE__*/React.createElement(ModalContent, null, cronPresets.map(preset => /*#__PURE__*/React.createElement(Radio, _extends({}, preset, {
    checked: currentPreset === preset.value,
    key: preset.value,
    onChange: _ref2 => {
      let {
        value
      } = _ref2;
      return setCurrentPreset(value);
    }
  })))), /*#__PURE__*/React.createElement(ModalActions, null, /*#__PURE__*/React.createElement(ButtonStrip, {
    end: true
  }, /*#__PURE__*/React.createElement(Button, {
    secondary: true,
    onClick: hideModal,
    name: "hide-modal"
  }, i18n.t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    name: "insert-preset",
    disabled: !currentPreset,
    onClick: () => {
      hideModal();
      setCron(currentPreset);
    }
  }, i18n.t('Insert preset')))));
};
const {
  func
} = PropTypes;
CronPresetModal.propTypes = {
  hideModal: func.isRequired,
  setCron: func.isRequired
};
export default CronPresetModal;