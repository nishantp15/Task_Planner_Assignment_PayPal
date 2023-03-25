import React from "react";
import { useState } from "react";
import Sidebar from "../Components/Sidebar";
import SprintDetails from "../Components/CreateNewTask";
import ToDoList from "../Components/ToDoList";
import "./Dashboard.css";

const Dashboard = () => {
    let[Sprint, setSprint] = useState("");
    let[isTaskCreated, setIsTaskCreated] = useState(false);

    function ShowSelectedSprintFun(data){
        console.log(data);
        setSprint(data)
    }

    function TaskListParentFun(d){
        setIsTaskCreated(d)
    }

  return (
    <div className="DashBoardMainBox">
      <Sidebar SelectedSprint={ShowSelectedSprintFun} Sprint={Sprint}/>
      <div className="DashBoardSubMainBox">
        <SprintDetails Data = {Sprint} isUpdated={TaskListParentFun}/>
        <ToDoList Data = {Sprint} UpdateList = {isTaskCreated} />
      </div>
    </div>
  );
};

export default Dashboard;
