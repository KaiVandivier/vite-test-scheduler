import { useDataEngine } from '@dhis2/app-runtime';
import formatError from '../../services/format-error';
const createMutation = encodedName => ({
  resource: `scheduler/queues/${encodedName}`,
  type: 'create',
  data: _ref => {
    let {
      queue
    } = _ref;
    return queue;
  }
});
const useSubmitQueue = function () {
  let {
    onSuccess
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const engine = useDataEngine();
  const submitQueue = queue => {
    const encodedName = encodeURIComponent(queue.name);
    const mutation = createMutation(encodedName);
    return engine.mutate(mutation, {
      variables: {
        queue
      }
    }).then(() => {
      if (onSuccess) {
        onSuccess();
      }
    }).catch(error => formatError(error));
  };
  return [submitQueue];
};
export default useSubmitQueue;