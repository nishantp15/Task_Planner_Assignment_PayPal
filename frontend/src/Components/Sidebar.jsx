import React from "react";
import "./ComponentStyles/Sidebar.css";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import SprintCreateModal from "./SprintCreateModal";
import { useState } from "react";
import { useEffect } from "react";
const Sidebar = ({SelectedSprint, Sprint}) => {
  let [ModalDisplay, setModalDisplay] = useState(false);
  let [SprintList, setSprintList] = useState([]);
  let url = "http://localhost:3001/sprintList";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((val) => {
        setSprintList(val);
      });
  }, []);

  function ShowSprintCreateModal() {
    setModalDisplay(true);
  }
  function HideCreateSprintModalFun() {
    setModalDisplay(false);
  }

  function UpdateSprintList(data){
    setSprintList((prev)=>[...prev,data])
  }

  function DeleteSprint(id, sprintName){
    fetch(`http://localhost:3001/sprintList/${id}`, {
      method:"DELETE"
    }).then(res=>res.json()).then(val=>{
      let data = [...SprintList].filter((ele)=>{
        return ele.sprintName!=sprintName;
      })
      setSprintList(data);
      console.log(sprintName);

    });
    alert("Sprint deleted")
  }

  return (
    <div className="SidebarMainBox">
      <h2>SPRINT LIST</h2>
      <button className="SprintCreateButton" onClick={ShowSprintCreateModal}>
        <IoMdAdd /> Create Sprint
      </button>

      <SprintCreateModal
        modal={ModalDisplay}
        HideModal={HideCreateSprintModalFun}
        UpdateList={UpdateSprintList}
      />

      <div className="SprintList">
        {SprintList.map((ele,ind) => {
          return (
            <div className="SprintTitle" key={ind+1} style={ele.sprintName==Sprint.sprintName ? {backgroundColor:"rgb(55, 23, 97)", color:"white"}:{backgroundColor:"inherit"}}>
              <h4 onClick={()=>{SelectedSprint(ele); console.log(Sprint)}}>{ele.sprintName}</h4>
              <MdDelete className="DeleteIcon" onClick={()=>{DeleteSprint(ele.id, ele.sprintName)}}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
