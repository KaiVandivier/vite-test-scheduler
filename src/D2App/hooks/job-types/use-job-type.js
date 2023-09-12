import useJobTypes from './use-job-types';
const useJobType = jobType => {
  const fetch = useJobTypes();

  // Return requested job type when there is data
  if (fetch.data) {
    var _fetch$data;
    if (!((_fetch$data = fetch.data) !== null && _fetch$data !== void 0 && _fetch$data.find)) {
      const error = new Error('Did not receive the expected job types');
      return {
        ...fetch,
        error,
        data: undefined
      };
    }
    const requestedJobType = fetch.data.find(currentJobType => currentJobType.jobType === jobType);
    if (!requestedJobType) {
      const error = new Error('Job type could not be found');
      return {
        ...fetch,
        data: undefined,
        error
      };
    }
    return {
      ...fetch,
      data: requestedJobType
    };
  }
  return fetch;
};
export default useJobType;