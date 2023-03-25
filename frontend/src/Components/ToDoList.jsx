import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import {AiFillEdit} from 'react-icons/ai'
import "./ComponentStyles/ToDoList.css";
import EditTaskModal from "./EditTaskModal";
const ToDoList = ({ Data, UpdateList }) => {
  let taskUrl = `http://localhost:3001/TaskList`;
  let [TaskListData, setTaskListData] = useState([]);
  let[EditTaskModalDisplay,setEditTaskModalDisplay] = useState(false);
  let [EditTaskData, setEditTaskData] = useState({})
    let[isEdited, setIsEdited] = useState(false)

  useEffect(() => {
    fetch(taskUrl)
      .then((res) => res.json())
      .then((val) => {
        let SprintTaskArray = val.filter((ele) => {
          return ele.sprintName === Data.sprintName;
        });
        setTaskListData(SprintTaskArray);
      });
  }, [Data, UpdateList, isEdited]);

  function DeleteTaskFun(id) {
    fetch(`http://localhost:3001/TaskList/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((val) => {
        console.log(val);
        let UpdatedListArray = [...TaskListData].filter((ele)=>{
            return ele.id!==id
        })
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

  function IsDataEditedFunc(val){
    setIsEdited(val)
  }

  return (
    <div className="ToDoListMainBox">
      <div className="TaskOptions">
        <button>Show all tasks</button>
        <button>Show user specific tasks</button>
      </div>
      <div className="ToDoListDispaly">
        <h3>Task List</h3>
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Issue Type</th>
              <th>Summary</th>
              <th>Assignee</th>
              <th>Status</th>
              <th>Edit/Change Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {TaskListData.length===0 ? <tr><td>No task assigned yet! 🔎</td></tr> : TaskListData.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.project}</td>
                  <td>{ele.issueType}</td>
                  <td>{ele.summary}</td>
                  <td>{ele.assignee}</td>
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
                  <td className="EditTaskList"><AiFillEdit onClick={()=>ShowEditTaskModal(ele)}/></td>
                  <td
                    className="DeleteTask"
                    onClick={() => DeleteTaskFun(ele.id)}
                  >
                    <MdDelete />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <EditTaskModal
        EditModal={EditTaskModalDisplay}
        HideEditModal={HideEditTaskModalFun}
        data = {EditTaskData}
        edited = {IsDataEditedFunc}
      />
    </div>
  );
};

export default ToDoList;
