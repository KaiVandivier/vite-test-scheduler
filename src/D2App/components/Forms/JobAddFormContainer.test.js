import React from 'react';
import { shallow } from 'enzyme';
import JobAddFormContainer from './JobAddFormContainer';
describe('<JobAddFormContainer>', () => {
  it('renders without errors', () => {
    const props = {
      setIsPristine: () => {}
    };
    shallow( /*#__PURE__*/React.createElement(JobAddFormContainer, props));
  });
});