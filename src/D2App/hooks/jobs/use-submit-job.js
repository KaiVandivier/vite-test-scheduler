import { useDataEngine } from '@dhis2/app-runtime';
import formatError from '../../services/format-error';
const mutation = {
  resource: 'jobConfigurations',
  type: 'create',
  data: /* istanbul ignore next */_ref => {
    let {
      job
    } = _ref;
    return job;
  }
};
const useSubmitJob = function () {
  let {
    onSuccess
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const engine = useDataEngine();
  const submitJob = job => engine.mutate(mutation, {
    variables: {
      job
    }
  }).then(() => {
    if (onSuccess) {
      onSuccess();
    }
  }).catch(error => formatError(error));
  return [submitJob];
};
export default useSubmitJob;