import useJobType from './use-job-type';
const useJobTypeParameters = jobType => {
  const fetch = useJobType(jobType);

  // Return parameters when there is data
  if (fetch.data) {
    var _fetch$data;
    const data = ((_fetch$data = fetch.data) === null || _fetch$data === void 0 ? void 0 : _fetch$data.jobParameters) || [];
    return {
      ...fetch,
      data
    };
  }
  return fetch;
};
export default useJobTypeParameters;