import React from "react";
import "./ComponentStyles/SprintDetails.css";
const SprintDetails = ({Data}) => {
  return (
    <div className="SprintDetailsMainBox">
      <h2>Sprint 1</h2>
      <div className="CreateNewTaskBox">
        <h4>Create New Task</h4>
        <form action="">
        <div>
          <label htmlFor="">
            Project Name* <input type="text" />
          </label>
          <label htmlFor="">
            Issue Type* 
            <select name="" id="">
                <option value="">Select</option>
                <option value="">Bug</option>
                <option value="">Feature</option>
                <option value="">Story</option>
            </select>
          </label>
        </div>
        <div>
          <label htmlFor="">
            User <input type="text" />
          </label>
          <label htmlFor="">
            Assignee <input type="text" name="" id="" />
          </label>
        </div>
        <div>
          <textarea name="" id="" cols="100" rows="2" placeholder="Summary...">
            
          </textarea>
        </div>
        <div>
            <button>Create Task</button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default SprintDetails;
