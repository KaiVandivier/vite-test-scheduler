import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';
describe('<Routes>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(Routes, null));
  });
});