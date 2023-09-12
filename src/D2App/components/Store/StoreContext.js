import { createContext } from 'react';
const StoreContext = /*#__PURE__*/createContext({
  jobFilter: '',
  showSystemJobs: false
});
export default StoreContext;