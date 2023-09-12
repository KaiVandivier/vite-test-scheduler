import React from 'react';
import { shallow } from 'enzyme';
import QueueAdd from './QueueAdd';
describe('<QueueAdd>', () => {
  it('renders without errors', () => {
    shallow( /*#__PURE__*/React.createElement(QueueAdd, null));
  });
});