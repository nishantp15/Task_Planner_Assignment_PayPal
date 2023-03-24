import React from "react";
import "./ComponentStyles/SprintCreateModal.css";
import {RxCross1} from 'react-icons/rx'
import { useState } from "react";
const SprintCreateModal = ({modal, HideModal, UpdateList}) => {
  let [CreatedSprintName, setCreatedSprintName] = useState("");

  let url = " http://localhost:3001/sprintList";

  function CreateSprintFunc(){
    if(CreatedSprintName!==""){
      fetch(url,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({sprintName:CreatedSprintName})
      }).then(res=>res.json()).then(val=>{
        UpdateList(val);
        console.log(val)});
        HideModal();
        alert("New sprint created");
        setCreatedSprintName("");
    }else{
      alert("Sprint name can not be empty")
    }
  }

  return (
    <div className={modal? "CreateSprintModalMainBox ShowModal":"CreateSprintModalMainBox HideModal"}>
      <div className="ModalCancelHeader">
        <button onClick={()=>HideModal()}><RxCross1/></button>
      </div>
      <div className="CreateSprintBox">
        <input type="text" placeholder="Enter/Edit Sprint Name..." value={CreatedSprintName} onChange={(e)=>setCreatedSprintName(e.target.value)}/>
        <button onClick={CreateSprintFunc}>Create</button>
      </div>
    </div>
  );
};

export default SprintCreateModal;
