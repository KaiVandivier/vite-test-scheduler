import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MenuItem } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import { DeleteJobModal } from '../Modal';
const DeleteJobAction = _ref => {
  let {
    id,
    onSuccess
  } = _ref;
  const [showModal, setShowModal] = useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MenuItem, {
    dense: true,
    destructive: true,
    onClick: () => {
      setShowModal(true);
    },
    label: i18n.t('Delete')
  }), showModal && /*#__PURE__*/React.createElement(DeleteJobModal, {
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
DeleteJobAction.propTypes = {
  id: string.isRequired,
  onSuccess: func.isRequired
};
export default DeleteJobAction;