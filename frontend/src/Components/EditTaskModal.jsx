import React from "react";
import "./ComponentStyles/EditTaskModal.css";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import { useEffect } from "react";
let InitData = { project: "", user: "", assignee: "", summary: "", status: "" };
const EditTaskModal = ({ modal, HideModal, data = InitData, edited }) => {
  let [FormDataModal, setFormDataModal] = useState(data);

  useEffect(() => {
    setFormDataModal(data);
  }, [data]);

  let url = " http://localhost:3001/sprintList";

  function EditedFormDataFunc(e) {
    let { name, value } = e.target;
    setFormDataModal({ ...FormDataModal, [name]: value });
  }

  function UpdateEditedData(e) {
    e.preventDefault();

    fetch(`http://localhost:3001/TaskList/${FormDataModal.id}`, {
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
    HideModal();

    console.log(FormDataModal);
  }

  return (
    <div
      className={
        modal
          ? "EditTaskModalMainBox ShowModal"
          : "EditTaskModalMainBox HideModal"
      }
    >
      <div className="ModalCancelHeader">
        <button onClick={() => HideModal()}>
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
    </div>
  );
};

export default EditTaskModal;
