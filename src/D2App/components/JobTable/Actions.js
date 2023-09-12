import React from 'react';
import PropTypes from 'prop-types';
import { FlyoutMenu, DropdownButton } from '@dhis2/ui';
import i18n from '@dhis2/d2-i18n';
import EditJobAction from './EditJobAction';
import ViewJobAction from './ViewJobAction';
import RunJobAction from './RunJobAction';
import DeleteJobAction from './DeleteJobAction';
const Actions = _ref => {
  let {
    id,
    configurable,
    enabled,
    refetch
  } = _ref;
  return /*#__PURE__*/React.createElement(DropdownButton, {
    small: true,
    component: /*#__PURE__*/React.createElement(FlyoutMenu, null, configurable ? /*#__PURE__*/React.createElement(EditJobAction, {
      id: id
    }) : /*#__PURE__*/React.createElement(ViewJobAction, {
      id: id
    }), /*#__PURE__*/React.createElement(RunJobAction, {
      enabled: enabled,
      id: id,
      onComplete: refetch
    }), configurable && /*#__PURE__*/React.createElement(DeleteJobAction, {
      id: id,
      onSuccess: refetch
    }))
  }, i18n.t('Actions'));
};
Actions.defaultProps = {
  configurable: false
};
const {
  string,
  bool,
  func
} = PropTypes;
Actions.propTypes = {
  id: string.isRequired,
  refetch: func.isRequired,
  configurable: bool,
  enabled: bool
};
export default Actions;