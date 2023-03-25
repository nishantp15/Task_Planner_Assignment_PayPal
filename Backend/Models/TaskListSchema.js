const mongoose = require("mongoose");

const TaskListSchema = mongoose.Schema(
  {
    sprintName: String,
    project: String,
    user: String,
    assignee: String,
    issueType: String,
    summary: String,
    status: String,
  },
  { timestamps: true }
);

const tasklist = mongoose.model("users", TaskListSchema);

module.exports = { tasklist };
