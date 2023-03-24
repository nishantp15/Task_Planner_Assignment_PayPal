import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { MdDelete } from "react-icons/md";
import './ComponentStyles/ToDoList.css'
const ToDoList = ({Data}) => {
    let taskUrl = `http://localhost:3001/TaskList`
    let[TaskListData, setTaskListData] = useState([])
    useEffect(()=>{
        fetch(taskUrl).then(res=>res.json()).then(val=>{
            let SprintTaskArray = val.filter((ele)=>{
                return ele.sprintName===Data.sprintName;
            })
            console.log(SprintTaskArray);
            setTaskListData(SprintTaskArray);
        })
    },[Data])
  return (
    <div className='ToDoListMainBox'>
        <div className='TaskOptions'>
            <button>Show all tasks</button>
            <button>Show user specific tasks</button>
        </div>
        <div className='ToDoListDispaly'>
            <h3>To Do List</h3>
            <table>
                <thead>
                    <tr>
                        <th>Project</th>
                        <th>Issue Type</th>
                        <th>Summary</th>
                        <th>Assignee</th>
                        <th>Status</th>
                        <th>Edit/Change Status</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {TaskListData.map((ele)=>{
                        return (
                        <tr key={ele.id}>
                            <td>{ele.project}</td>
                            <td>{ele.issueType}</td>
                            <td>{ele.summary}</td>
                            <td>{ele.assignee}</td>
                            <td style={ele.status==="incomplete" ? {backgroundColor:"red"}:ele.status==="complete" ? {backgroundColor:"green"}:{backgroundColor:"yellow"}}>{ele.status}</td>
                            <td></td>
                            <td><MdDelete/></td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ToDoList