import React from 'react';
import PropTypes from 'prop-types';
import { useDataMutation } from '@dhis2/app-runtime';
import i18n from '@dhis2/d2-i18n';
import { Switch } from '@dhis2/ui';

/* istanbul ignore next */
const mutation = {
  resource: 'jobConfigurations',
  id: _ref => {
    let {
      id
    } = _ref;
    return id;
  },
  type: 'update',
  partial: true,
  data: _ref2 => {
    let {
      enabled
    } = _ref2;
    return {
      enabled
    };
  }
};
const ToggleJobSwitch = _ref3 => {
  let {
    id,
    checked,
    disabled,
    refetch
  } = _ref3;
  const [toggleJob, {
    loading
  }] = useDataMutation(mutation);
  const enabled = !checked;
  return /*#__PURE__*/React.createElement(Switch, {
    name: `toggle-job-${id}`,
    disabled: disabled || loading,
    checked: checked,
    onChange: () => {
      toggleJob({
        id,
        enabled
      }).then(refetch);
    },
    ariaLabel: i18n.t('Toggle job')
  });
};
const {
  bool,
  string,
  func
} = PropTypes;
ToggleJobSwitch.propTypes = {
  checked: bool.isRequired,
  disabled: bool.isRequired,
  id: string.isRequired,
  refetch: func.isRequired
};
export default ToggleJobSwitch;