import { useDataEngine } from '@dhis2/app-runtime';
import formatError from '../../services/format-error';
const mutation = {
  resource: 'jobConfigurations',
  type: 'update',
  id: /* istanbul ignore next */_ref => {
    let {
      id
    } = _ref;
    return id;
  },
  data: /* istanbul ignore next */_ref2 => {
    let {
      job
    } = _ref2;
    return job;
  }
};
const useUpdateJob = function () {
  let {
    onSuccess,
    id
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const engine = useDataEngine();
  const updateJob = job => engine.mutate(mutation, {
    variables: {
      job,
      id
    }
  }).then(() => {
    if (onSuccess) {
      onSuccess();
    }
  }).catch(error => formatError(error));
  return [updateJob];
};
export default useUpdateJob;