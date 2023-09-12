import React from 'react';
import { shallow } from 'enzyme';
import JobAdd from './JobAdd';
describe('<JobAdd>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(JobAdd, null));
  });
});