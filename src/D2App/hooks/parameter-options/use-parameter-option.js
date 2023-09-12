import useParameterOptions from './use-parameter-options';
const useParameterOption = parameter => {
  const fetch = useParameterOptions();

  // Select required parameter when there is data
  if (fetch.data) {
    var _fetch$data;
    const data = ((_fetch$data = fetch.data) === null || _fetch$data === void 0 ? void 0 : _fetch$data[parameter]) || [];
    return {
      ...fetch,
      data
    };
  }
  return fetch;
};
export default useParameterOption;