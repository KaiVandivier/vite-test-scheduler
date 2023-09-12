import React from 'react';
import { shallow } from 'enzyme';
import Actions from './Actions';
describe('<Actions>', () => {
  it('renders without errors for configurable jobs', () => {
    shallow( /*#__PURE__*/React.createElement(Actions, {
      id: "1",
      configurable: true,
      refetch: () => {}
    }));
  });
  it('renders without errors for non configurable jobs', () => {
    shallow( /*#__PURE__*/React.createElement(Actions, {
      id: "1",
      refetch: () => {}
    }));
  });
});