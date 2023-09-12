import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { RunJobModal } from '../Modal';
const RunJobAction = _ref => {
  let {
    id,
    enabled,
    onComplete
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
    dense: true,
    onClick: () => {
      setShowModal(true);
    },
    disabled: !enabled,
    label: i18n.t('Run manually')
  }), showModal && /*#__PURE__*/React.createElement(RunJobModal, {
    id: id,
    hideModal: /* istanbul ignore next */
    () => setShowModal(false),
    onComplete: onComplete
  }));
};
const {
  string,
  bool,
  func
} = PropTypes;
RunJobAction.propTypes = {
  id: string.isRequired,
  onComplete: func.isRequired,
  enabled: bool
};
export default RunJobAction;