import { useDataEngine } from '@dhis2/app-runtime';
import formatError from '../../services/format-error';
const createMutation = encodedInitialName => ({
  resource: `scheduler/queues/${encodedInitialName}`,
  type: 'update',
  data: _ref => {
    let {
      queue
    } = _ref;
    return queue;
  }
});
const useUpdateQueue = function () {
  let {
    onSuccess,
    initialName
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const engine = useDataEngine();
  const updateQueue = queue => {
    const encodedInitialName = encodeURIComponent(initialName);
    const mutation = createMutation(encodedInitialName);
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
  return [updateQueue];
};
export default useUpdateQueue;