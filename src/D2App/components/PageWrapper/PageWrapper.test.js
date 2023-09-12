import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './PageWrapper';
describe('<PageWrapper>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(PageWrapper, null, "Text"));
  });
});