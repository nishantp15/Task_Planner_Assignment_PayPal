import React from "react";
import "./ComponentStyles/Sidebar.css";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import SprintCreateModal from "./SprintCreateModal";
import { useState } from "react";
const Sidebar = () => {
  let [ModalDisplay, setModalDisplay] = useState(false)
  function ShowSprintCreateModal(){
    setModalDisplay(true)
  }
  function HideCreateSprintModalFun(){
    setModalDisplay(false)
}

  return (
    <div className="SidebarMainBox">
      <h2>SPRINT LIST</h2>
      <button className="SprintCreateButton" onClick={ShowSprintCreateModal}>
        <IoMdAdd /> Create Sprint
      </button>

      <SprintCreateModal modal = {ModalDisplay} HideModal={HideCreateSprintModalFun} />

      <div className="SprintList">
        <div className="SprintTitle">
          <h4>Sprint 1</h4>
          <MdDelete className="DeleteIcon" />
        </div>
        <div className="SprintTitle">
          <h4>Sprint 1</h4>
          <MdDelete className="DeleteIcon" />
        </div>
        <div className="SprintTitle">
          <h4>Sprint 1</h4>
          <MdDelete className="DeleteIcon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
