import React from 'react';
import { ReactFinalForm } from '@dhis2/ui';
import history from '../../services/history';
import { useSubmitQueue } from '../../hooks/queues';
import QueueAddForm from './QueueAddForm';
const {
  Form
} = ReactFinalForm;
const navigateHome = () => {
  history.push('/');
};
const QueueAddFormContainer = () => {
  const [submitQueue] = useSubmitQueue({
    onSuccess: navigateHome
  });
  return /*#__PURE__*/React.createElement(Form, {
    onSubmit: submitQueue,
    component: QueueAddForm,
    destroyOnUnregister: true
  });
};
export default QueueAddFormContainer;