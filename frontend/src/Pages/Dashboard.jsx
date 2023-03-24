import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import SprintDetails from "../Components/SprintDetails";
import ToDoList from "../Components/ToDoList";
import "./Dashboard.css";

const Dashboard = () => {
    let[Sprint, setSprint] = useState("");
    function ShowSelectedSprintFun(data){
        console.log(data);
        setSprint(data)
    }
  return (
    <div className="DashBoardMainBox">
      <Sidebar SelectedSprint={ShowSelectedSprintFun} Sprint={Sprint}/>
      <div className="DashBoardSubMainBox">
        <SprintDetails Data = {Sprint} />
        <ToDoList Data = {Sprint}/>
      </div>
    </div>
  );
};

export default Dashboard;
