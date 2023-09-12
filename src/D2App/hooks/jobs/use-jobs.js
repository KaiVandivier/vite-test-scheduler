import { useDataQuery } from '@dhis2/app-runtime';
const key = 'jobs';
const query = {
  [key]: {
    resource: 'jobConfigurations',
    params: {
      fields: ['created', 'configurable', 'cronExpression', 'delay', 'id', 'jobParameters', 'jobType', 'lastExecuted', 'lastExecutedStatus', 'name']
    }
  }
};
const useJobs = () => {
  const fetch = useDataQuery(query);

  // Remove nesting from data
  if (fetch.data) {
    var _fetch$data, _fetch$data$key;
    const data = (_fetch$data = fetch.data) === null || _fetch$data === void 0 ? void 0 : (_fetch$data$key = _fetch$data[key]) === null || _fetch$data$key === void 0 ? void 0 : _fetch$data$key.jobConfigurations;
    if (!data) {
      const error = new Error('Did not receive the expected job configurations');
      return {
        ...fetch,
        error,
        data: undefined
      };
    }
    return {
      ...fetch,
      data
    };
  }
  return fetch;
};
export default useJobs;