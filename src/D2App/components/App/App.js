import React from 'react';
import { CssVariables } from '@dhis2/ui';
import { Routes } from '../Routes';
import { AuthWall } from '../AuthWall';
import { Store } from '../Store';
import { PageWrapper } from '../PageWrapper';
import './App.css';

// eslint-disable-next-line import/no-unassigned-import
import '../../locales';
// The above is necessary for translations to work

const App = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CssVariables, {
  spacers: true,
  colors: true,
  theme: true
}), /*#__PURE__*/React.createElement(PageWrapper, null, /*#__PURE__*/React.createElement(AuthWall, null, /*#__PURE__*/React.createElement(Store, null, /*#__PURE__*/React.createElement(Routes, null)))));
export default App;