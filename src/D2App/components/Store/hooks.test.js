import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { useJobFilter, useShowSystemJobs } from './hooks';
import StoreContext from './StoreContext';
describe('useJobFilter', () => {
  it('should return the jobFilter part of the store', () => {
    const jobFilter = 'jobFilter';
    const store = {
      jobFilter
    };
    const wrapper = _ref => {
      let {
        children
      } = _ref;
      return /*#__PURE__*/React.createElement(StoreContext.Provider, {
        value: store
      }, children);
    };
    const {
      result
    } = renderHook(() => useJobFilter(), {
      wrapper
    });
    expect(result.current).toBe(jobFilter);
  });
});
describe('useShowSystemJobs', () => {
  it('should return the showSystemJobs part of the store', () => {
    const showSystemJobs = 'showSystemJobs';
    const store = {
      showSystemJobs
    };
    const wrapper = _ref2 => {
      let {
        children
      } = _ref2;
      return /*#__PURE__*/React.createElement(StoreContext.Provider, {
        value: store
      }, children);
    };
    const {
      result
    } = renderHook(() => useShowSystemJobs(), {
      wrapper
    });
    expect(result.current).toBe(showSystemJobs);
  });
});