import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import "./ComponentStyles/ToDoList.css";
import EditTaskModal from "./EditTaskModal";
import Loader from "./Loader";
import UserSpecificTask from "./UserSpecificTask";

const ToDoList = ({ Data, UpdateList }) => {
  let taskUrl = `https://taskplanner-ytz0.onrender.com/tasklist`;
  let [TaskListData, setTaskListData] = useState([]);
  let [EditTaskModalDisplay, setEditTaskModalDisplay] = useState(false);
  let [EditTaskData, setEditTaskData] = useState({});
  let [isEdited, setIsEdited] = useState(false);
  let [isLoading, setIsLoading] = useState(false);
  let [isUserSpecificTask, setIsUserSpecificTask] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(taskUrl)
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        let SprintTaskArray = val.filter((ele) => {
          return ele.sprintName === Data.sprintName;
        });
        setTaskListData(SprintTaskArray);
        setIsLoading(false);
      });
  }, [Data, UpdateList, isEdited, taskUrl]);

  function DeleteTaskFun(id) {
    fetch(`https://taskplanner-ytz0.onrender.com/tasklist/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        let UpdatedListArray = [...TaskListData].filter((ele) => {
          return ele._id !== id;
        });
        setTaskListData(UpdatedListArray);
      });
  }

  function ShowEditTaskModal(data) {
    setEditTaskModalDisplay(true);
    setEditTaskData(data);
  }

  function HideEditTaskModalFun() {
    setEditTaskModalDisplay(false);
  }

  function IsDataEditedFunc(val) {
    setIsEdited(val);
  }

  function isLoadingFunc(boolean) {
    setIsLoading(boolean);
  }

  function ShowTaskList() {
    setIsUserSpecificTask(false);
  }

  function ShowUserSpecificTasks() {
    setIsUserSpecificTask(true);
  }

  if (isUserSpecificTask) {
    return (
      <>
        <div className="TaskOptions">
        <button onClick={ShowTaskList} style={!isUserSpecificTask ? {background:"rgb(55, 23, 97)",color:"white"}:{background:""}}>Show All Tasks</button>
        <button onClick={ShowUserSpecificTasks} style={isUserSpecificTask ? {background:"rgb(55, 23, 97)",color:"white"}:{background:""}}>
          Show User Specific Tasks
        </button>
        </div>
        <UserSpecificTask tasklist={TaskListData} />
      </>
    );
  }

  return (
    <div className="ToDoListMainBox">
      <div className="TaskOptions">
      <button onClick={ShowTaskList} style={!isUserSpecificTask ? {background:"rgb(55, 23, 97)",color:"white"}:{background:""}}>Show All Tasks</button>
        <button onClick={ShowUserSpecificTasks} style={isUserSpecificTask ? {background:"rgb(55, 23, 97)",color:"white"}:{background:""}}>
          Show User Specific Tasks
        </button>
      </div>

      <div className="ToDoListDispaly">
        <h3>Task List</h3>
        {isLoading ? (
          <Loader />
        ) : (
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Issue Type</th>
                <th>Summary</th>
                <th>User</th>
                <th>Assignee</th>
                <th>Status</th>
                <th>Edit/Change Status</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {TaskListData.length === 0 ? (
                <tr>
                  <td>No task assigned yet! 🔎</td>
                </tr>
              ) : (
                TaskListData.map((ele) => {
                  return (
                    <tr key={ele._id}>
                      <td>{ele.project}</td>
                      <td>{ele.issueType}</td>
                      <td>{ele.summary}</td>
                      <td>{ele.assignee}</td>
                      <td>{ele.user}</td>
                      <td
                        style={
                          ele.status === "Incomplete"
                            ? { backgroundColor: "red" }
                            : ele.status === "Completed"
                            ? { backgroundColor: "green" }
                            : { backgroundColor: "yellow" }
                        }
                      >
                        {ele.status}
                      </td>
                      <td className="EditTaskList">
                        <AiFillEdit onClick={() => ShowEditTaskModal(ele)} />
                      </td>
                      <td
                        className="DeleteTask"
                        onClick={() => DeleteTaskFun(ele._id)}
                      >
                        <MdDelete />
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        )}
      </div>
      <EditTaskModal
        EditModal={EditTaskModalDisplay}
        HideEditModal={HideEditTaskModalFun}
        data={EditTaskData}
        edited={IsDataEditedFunc}
        isLoading={isLoadingFunc}
      />
    </div>
  );
};

export default ToDoList;
