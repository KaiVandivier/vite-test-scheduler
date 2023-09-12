const filterJobs = _ref => {
  let {
    jobFilter,
    showSystemJobs,
    jobs
  } = _ref;
  // Filter jobs by the current jobFilter
  const applyJobFilter = job => job.name.toLowerCase().includes(jobFilter.toLowerCase());

  // Filter jobs depending on the current showSystemJobs
  const applyShowSystemJobs = job =>
  // Jobs that are configurable are user jobs
  showSystemJobs ? true : job.configurable;
  return jobs.filter(applyJobFilter).filter(applyShowSystemJobs);
};
export default filterJobs;