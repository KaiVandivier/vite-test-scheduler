import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { CustomDataProvider } from '@dhis2/app-runtime';
import useQueueByName from './use-queue-by-name';
describe('useQueueByName', () => {
  it('should return the expected data', async () => {
    const expected = 'expected';
    const data = {
      'scheduler/queues/name': expected
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
    } = renderHook(() => useQueueByName('name'), {
      wrapper
    });

    // Loading state
    await waitFor(() => {
      expect(result.current).toMatchObject({
        loading: true,
        error: undefined,
        data: undefined
      });
    });
    await waitFor(() => {
      expect(result.current).toMatchObject({
        loading: false,
        error: undefined,
        data: expected
      });
    });
  });
});