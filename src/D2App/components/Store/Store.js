import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StoreContext from './StoreContext';
const Store = _ref => {
  let {
    children
  } = _ref;
  // State that should persist
  const jobFilterState = useState('');
  const showSystemJobsState = useState(false);
  return /*#__PURE__*/React.createElement(StoreContext.Provider, {
    value: {
      jobFilter: jobFilterState,
      showSystemJobs: showSystemJobsState
    }
  }, children);
};
const {
  node
} = PropTypes;
Store.propTypes = {
  children: node.isRequired
};
export default Store;