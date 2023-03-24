import React from "react";
import "./ComponentStyles/SprintCreateModal.css";
import {RxCross1} from 'react-icons/rx'
import { useState } from "react";
const SprintCreateModal = ({modal, HideModal}) => {
    

  return (
    <div className={modal? "CreateSprintModalMainBox ShowModal":"CreateSprintModalMainBox HideModal"}>
      <div className="ModalCancelHeader">
        <button onClick={()=>HideModal()}><RxCross1/></button>
      </div>
      <div className="CreateSprintBox">
        <input type="text" placeholder="Enter/Edit Sprint Name..." />
        <button>Create</button>
      </div>
    </div>
  );
};

export default SprintCreateModal;
