import React from "react";
import { useState } from "react";
import "./ComponentStyles/CreateNewTask.css";

const CreateNewTask = ({ Data, isUpdated }) => {
  let InitialFormData = {
    sprintName: "",
    project: "",
    user: "",
    assignee: "",
    issueType: "",
    summary: "",
    status: "Incomplete",
  };

  let [FormData, setFormData] = useState({ ...InitialFormData });

  function FormDataFunc(e) {
    let { name, value } = e.target;
    setFormData({ ...FormData, sprintName: Data.sprintName, [name]: value });
  }

  function CreateTaskFunc(e) {
    e.preventDefault();
    if (Data.sprintName === "") {
      alert("Select sprint first !");
    } else if (FormData.project === "" && FormData.issueType === "") {
      alert("Incomplete details");
    } else {
      fetch(`https://taskplanner-ytz0.onrender.com/tasklist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(FormData),
      })
        .then((res) => {
            isUpdated(true)
          return res.json();
        })
        .then((val) => {
            isUpdated(false);
            setFormData(InitialFormData)
          console.log(val);
        });
    }
  }

  return (
    <div className="SprintDetailsMainBox">
      {Data.sprintName===undefined ? <h2 style={{color:"red"}}>Please select sprint...</h2>: <h2>{Data.sprintName}</h2>}
      <div className="CreateNewTaskBox">
        <h4>Create New Task</h4>
        <form action="">
          <div>
            <label htmlFor="">
              Project Name*{" "}
              <input
                type="text"
                name="project"
                value={FormData.project}
                onChange={FormDataFunc}
              />
            </label>
            <label htmlFor="">
              Issue Type*
              <select
                name="issueType"
                value={FormData.issueType}
                onChange={FormDataFunc}
                id=""
              >
                <option value="">Select</option>
                <option value="Bug">Bug</option>
                <option value="Feature">Feature</option>
                <option value="Story">Story</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="">
              User{" "}
              <input
                type="text"
                name="user"
                value={FormData.user}
                onChange={FormDataFunc}
              />
            </label>
            <label htmlFor="">
              Assignee{" "}
              <input
                type="text"
                name="assignee"
                value={FormData.assignee}
                onChange={FormDataFunc}
                id=""
              />
            </label>
          </div>
          <div>
            <textarea
              name="summary"
              value={FormData.summary}
              id=""
              cols="100"
              rows="2"
              placeholder="Summary..."
              onChange={FormDataFunc}
            ></textarea>
          </div>
          <div>
            <button onClick={CreateTaskFunc}>Create Task</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewTask;
