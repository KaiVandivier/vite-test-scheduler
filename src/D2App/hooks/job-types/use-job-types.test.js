import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { CustomDataProvider } from '@dhis2/app-runtime';
import useJobTypes from './use-job-types';
describe('useJobTypes', () => {
  it('should return the job types without nesting', async () => {
    const jobTypes = 'jobTypes';
    const data = {
      'jobConfigurations/jobTypes': {
        jobTypes
      }
    };
    const wrapper = _ref => {
      let {
        children
      } = _ref;
      return /*#__PURE__*/React.createElement(CustomDataProvider, {
        data: data
      }, children);
    };
    const {
      result,
      waitFor
    } = renderHook(() => useJobTypes(), {
      wrapper
    });
    await waitFor(() => {
      expect(result.current).toMatchObject({
        loading: false,
        error: undefined,
        data: jobTypes
      });
    });
  });
  it('should return an error if job types are in an unexpected format', async () => {
    const data = {
      'jobConfigurations/jobTypes': {
        jobTypes: false
      }
    };
    const wrapper = _ref2 => {
      let {
        children
      } = _ref2;
      return /*#__PURE__*/React.createElement(CustomDataProvider, {
        data: data
      }, children);
    };
    const {
      result,
      waitFor
    } = renderHook(() => useJobTypes(), {
      wrapper
    });
    await waitFor(() => {
      expect(result.current).toMatchObject({
        loading: false,
        data: undefined
      });
      expect(result.current.error.message).toBe('Did not receive the expected job types');
    });
  });
});