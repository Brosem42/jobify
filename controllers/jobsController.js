const createJob = async (req, res) => {
  res.send("created job");
}

const deleteJob = async (req, res) => {
  res.send("deleted job");
}

const getAllJobs = async (req, res) => {
  res.send("get all jobs");
}

const updateJob = async (req, res) => {
  res.send("updated job");
}

const showStats = async (req, res) => {
  res.send("show stats");
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats };