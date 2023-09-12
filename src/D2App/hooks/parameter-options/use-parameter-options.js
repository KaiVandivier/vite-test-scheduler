import { useDataQuery } from '@dhis2/app-runtime';
const query = {
  skipTableTypes: {
    resource: 'analytics/tableTypes'
  },
  validationRuleGroups: {
    resource: 'validationRuleGroups',
    params: {
      paging: false
    }
  },
  pushAnalysis: {
    resource: 'pushAnalysis',
    params: {
      paging: false
    }
  },
  predictors: {
    resource: 'predictors',
    params: {
      paging: false
    }
  },
  predictorGroups: {
    resource: 'predictorGroups',
    params: {
      paging: false
    }
  },
  dataIntegrityChecks: {
    resource: 'dataIntegrity'
  }
};
const useParameterOptions = () => {
  const fetch = useDataQuery(query);

  // Remove nesting from data
  if (fetch.data) {
    var _fetch$data, _fetch$data2, _fetch$data2$validati, _fetch$data3, _fetch$data3$pushAnal, _fetch$data4, _fetch$data4$predicto, _fetch$data5, _fetch$data5$predicto, _fetch$data6;
    const skipTableTypes = (_fetch$data = fetch.data) === null || _fetch$data === void 0 ? void 0 : _fetch$data.skipTableTypes;
    const validationRuleGroups = (_fetch$data2 = fetch.data) === null || _fetch$data2 === void 0 ? void 0 : (_fetch$data2$validati = _fetch$data2.validationRuleGroups) === null || _fetch$data2$validati === void 0 ? void 0 : _fetch$data2$validati.validationRuleGroups;
    const pushAnalysis = (_fetch$data3 = fetch.data) === null || _fetch$data3 === void 0 ? void 0 : (_fetch$data3$pushAnal = _fetch$data3.pushAnalysis) === null || _fetch$data3$pushAnal === void 0 ? void 0 : _fetch$data3$pushAnal.pushAnalysis;
    const predictors = (_fetch$data4 = fetch.data) === null || _fetch$data4 === void 0 ? void 0 : (_fetch$data4$predicto = _fetch$data4.predictors) === null || _fetch$data4$predicto === void 0 ? void 0 : _fetch$data4$predicto.predictors;
    const predictorGroups = (_fetch$data5 = fetch.data) === null || _fetch$data5 === void 0 ? void 0 : (_fetch$data5$predicto = _fetch$data5.predictorGroups) === null || _fetch$data5$predicto === void 0 ? void 0 : _fetch$data5$predicto.predictorGroups;
    const dataIntegrityChecks = (_fetch$data6 = fetch.data) === null || _fetch$data6 === void 0 ? void 0 : _fetch$data6.dataIntegrityChecks;
    if (!skipTableTypes || !validationRuleGroups || !pushAnalysis || !predictors || !predictorGroups || !dataIntegrityChecks) {
      const error = new Error('Did not receive the expected parameter options');
      return {
        ...fetch,
        error,
        data: undefined
      };
    }
    const data = {
      skipTableTypes,
      validationRuleGroups,
      pushAnalysis,
      predictors,
      predictorGroups,
      dataIntegrityChecks
    };
    return {
      ...fetch,
      data
    };
  }
  return fetch;
};
export default useParameterOptions;