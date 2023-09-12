import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { CronPresetModal } from '../Modal';
const CronPresetButton = _ref => {
  let {
    setCron,
    small
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    onClick: () => setShowModal(true),
    small: small
  }, i18n.t('Choose from preset times')), showModal && /*#__PURE__*/React.createElement(CronPresetModal, {
    hideModal: /* istanbul ignore next */
    () => setShowModal(false),
    setCron: setCron
  }));
};
CronPresetButton.defaultProps = {
  small: false
};
const {
  func,
  bool
} = PropTypes;
CronPresetButton.propTypes = {
  setCron: func.isRequired,
  small: bool
};
export default CronPresetButton;