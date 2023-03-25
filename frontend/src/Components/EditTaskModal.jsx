import React from "react";
import "./ComponentStyles/EditTaskModal.css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
import AlertToast from "./AlertToast";

let InitData = { project: "", user: "", assignee: "", summary: "", status: "" };

const EditTaskModal = ({ EditModal, HideEditModal, data = InitData, edited }) => {
  let [FormDataModal, setFormDataModal] = useState(data);
  // let [AlertDisplay, setAlertDisplay] = useState(false);

  useEffect(() => {
    setFormDataModal(data);
  }, [data]);


  function EditedFormDataFunc(e) {
    let { name, value } = e.target;
    setFormDataModal({ ...FormDataModal, [name]: value });
  }

  function UpdateEditedData(e) {
    e.preventDefault();

    fetch(`https://taskplanner-ytz0.onrender.com/tasklist/${FormDataModal._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormDataModal),
    })
      .then((res) => {
        edited(true);
        return res.json();
      })
      .then((val) => {
        edited(false)
        
        console.log(val);
      });
    HideEditModal();

    console.log(FormDataModal);
  }

  return (
    <div
      className={
        EditModal
          ? "EditTaskModalMainBox ShowEditModal"
          : "EditTaskModalMainBox HideEditModal"
      }
    >
      <div className="ModalCancelHeader">
        <button onClick={() => HideEditModal()}>
          <RxCross1 />
        </button>
      </div>
      <div className="EditTaskModalBox">
        <h3>Edit task details</h3>
        <form action="">
          <label htmlFor="">Project Name</label>
          <input
            type="text"
            name="project"
            value={FormDataModal.project}
            onChange={EditedFormDataFunc}
          />
          <label htmlFor="">User</label>
          <input
            type="text"
            name="user"
            value={FormDataModal.user}
            onChange={EditedFormDataFunc}
          />
          <label htmlFor="">Assignee</label>
          <input
            type="text"
            name="assignee"
            value={FormDataModal.assignee}
            onChange={EditedFormDataFunc}
          />
          <label htmlFor="">Status</label>
          <select
            name="status"
            value={FormDataModal.status}
            onChange={EditedFormDataFunc}
            id=""
          >
            <option value="">Select</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Incomplete">Incomplete</option>
          </select>
          <label htmlFor="">Add note</label>
          <textarea
            name="summary"
            id=""
            cols="40"
            rows="5"
            value={FormDataModal.summary}
            onChange={EditedFormDataFunc}
          ></textarea>
          <button onClick={UpdateEditedData}>Save</button>
        </form>
      </div>

      <AlertToast/>
    </div>
  );
};

export default EditTaskModal;
