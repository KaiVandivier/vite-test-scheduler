import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Router } from 'react-router';
import JobList from '../../pages/JobList';
import JobAdd from '../../pages/JobAdd';
import QueueAdd from '../../pages/QueueAdd';
import QueueEdit from '../../pages/QueueEdit';
import history from '../../services/history';
import JobViewOrEdit from './JobViewOrEdit';
const Routes = () => /*#__PURE__*/React.createElement(Router, {
  history: history
}, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
  from: "/edit/:id",
  to: "/job/:id"
}), /*#__PURE__*/React.createElement(Redirect, {
  from: "/view/:id",
  to: "/job/:id"
}), /*#__PURE__*/React.createElement(Redirect, {
  from: "/add",
  to: "/job/add"
}), /*#__PURE__*/React.createElement(Route, {
  exact: true,
  path: "/",
  component: JobList
}), /*#__PURE__*/React.createElement(Route, {
  path: "/job/add",
  component: JobAdd
}), /*#__PURE__*/React.createElement(Route, {
  path: "/job/:id",
  component: JobViewOrEdit
}), /*#__PURE__*/React.createElement(Route, {
  path: "/queue/add",
  component: QueueAdd
}), /*#__PURE__*/React.createElement(Route, {
  path: "/queue/:name",
  component: QueueEdit
})));
export default Routes;