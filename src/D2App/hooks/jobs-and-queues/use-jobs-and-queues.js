import { useDataQuery } from '@dhis2/app-runtime';
const key = 'jobsAndQueues';
const query = {
  [key]: {
    resource: 'scheduler'
  }
};
const useJobsAndQueues = () => {
  const fetch = useDataQuery(query);

  // Remove nesting from data and move the id up
  if (fetch.data) {
    var _fetch$data;
    const jobsAndQueues = (_fetch$data = fetch.data) === null || _fetch$data === void 0 ? void 0 : _fetch$data[key];
    if (!(jobsAndQueues !== null && jobsAndQueues !== void 0 && jobsAndQueues.map)) {
      const error = new Error('Did not receive the expected jobs and queues');
      return {
        ...fetch,
        error,
        data: undefined
      };
    }
    const data = jobsAndQueues.map(schedule => {
      var _schedule$sequence, _schedule$sequence$;
      const id = (_schedule$sequence = schedule.sequence) === null || _schedule$sequence === void 0 ? void 0 : (_schedule$sequence$ = _schedule$sequence[0]) === null || _schedule$sequence$ === void 0 ? void 0 : _schedule$sequence$.id;
      return {
        ...schedule,
        id
      };
    });
    return {
      ...fetch,
      data
    };
  }
  return fetch;
};
export default useJobsAndQueues;