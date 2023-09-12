import React from 'react';
import { NoticeBox } from '@dhis2/ui';
import { useParams } from 'react-router-dom';
import i18n from '@dhis2/d2-i18n';
import { useJobById } from '../../hooks/jobs';
import { Spinner } from '../Spinner';
import JobEdit from '../../pages/JobEdit';
import JobView from '../../pages/JobView';
const JobViewOrEdit = () => {
  const {
    id
  } = useParams();
  const {
    data,
    fetching,
    error
  } = useJobById(id);
  if (fetching) {
    return /*#__PURE__*/React.createElement(Spinner, null);
  }
  if (error) {
    return /*#__PURE__*/React.createElement(NoticeBox, {
      error: true,
      title: i18n.t('Could not load requested job')
    }, i18n.t('Something went wrong whilst loading the requested job. Make sure it has not been deleted and try refreshing the page.'));
  }
  const {
    configurable
  } = data;
  if (configurable) {
    return /*#__PURE__*/React.createElement(JobEdit, {
      job: data
    });
  } else {
    return /*#__PURE__*/React.createElement(JobView, {
      job: data
    });
  }
};
export default JobViewOrEdit;