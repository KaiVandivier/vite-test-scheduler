import React from 'react';
import PropTypes from 'prop-types';
import { ReactFinalForm } from '@dhis2/ui';
import { useParams } from 'react-router-dom';
import history from '../../services/history';
import { useUpdateJob } from '../../hooks/jobs';
import JobEditForm from './JobEditForm';
const {
  Form
} = ReactFinalForm;
const JobEditFormContainer = _ref => {
  let {
    job
  } = _ref;
  const {
    id
  } = useParams();
  const redirect = () => {
    history.push('/');
  };
  const [updateJob] = useUpdateJob({
    id,
    onSuccess: redirect
  });

  // Creating an object with just the values we want to use as initial values
  const {
    cronExpression,
    delay,
    jobParameters,
    jobType,
    name
  } = job;
  const initialValues = {
    cronExpression,
    delay,
    jobParameters,
    jobType,
    name
  };
  return /*#__PURE__*/React.createElement(Form, {
    onSubmit: updateJob,
    component: JobEditForm,
    initialValues: initialValues,
    id: id,
    destroyOnUnregister: true
  });
};
const {
  object
} = PropTypes;
JobEditFormContainer.propTypes = {
  job: object.isRequired
};
export default JobEditFormContainer;