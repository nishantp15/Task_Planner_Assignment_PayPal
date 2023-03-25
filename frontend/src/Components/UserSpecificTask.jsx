import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./ComponentStyles/UserSpecificTask.css";
const UserSpecificTask = ({ tasklist = [] }) => {
  let [AssignedTasks, setAssignedTasks] = useState([]);
  let [UserNameArray, setUserNameArray] = useState([]);
  let [SelectedUser, setSelectedUser] = useState("")
  useEffect(() => {
    let UniqueUserArr = Array.from(new Set(tasklist.map((item) => item.user)));
    setUserNameArray(UniqueUserArr);
    console.log(UniqueUserArr);
  }, [tasklist]);

  function ShowAsshignedTaskFun(user) {
    let filterTaskArray = tasklist.filter((ele) => {
      return ele.user === user;
    });
    setAssignedTasks(filterTaskArray);
    setSelectedUser(user);
    console.log(filterTaskArray);
  }

  return (
    <div className="UserSpecificTaskMainBox">
      <div>
        <table className="UserListTable">
          <thead>
            <tr>
              <th>Users</th>
              <th>Select</th>
            </tr>
          </thead>
          <tbody>
            {UserNameArray.length === 0 ? (
              <tr>
                <td>No user available</td> <td></td>
              </tr>
            ) : (
              UserNameArray.map((ele, ind) => {
                return (
                  <tr key={ind + 1} style={ele===SelectedUser ? {background:"green"}:{background:""}}>
                    <td>{ele}</td>
                    <td>
                      <button
                        onClick={() => {
                          ShowAsshignedTaskFun(ele);
                        }}
                      >
                        Select
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <div>
        <table className="UserTaskTable">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Issue Type</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {AssignedTasks.length === 0 ? (
              <tr>
                <td>No task available</td>
                <td></td>
                <td></td>
              </tr>
            ) : (
              AssignedTasks.map((ele) => {
                return (
                  <tr>
                    <td>{ele.project}</td>
                    <td>{ele.issueType}</td>
                    <td>{ele.status}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSpecificTask;
