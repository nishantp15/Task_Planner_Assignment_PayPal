import React from 'react'
import './ComponentStyles/ToDoList.css'
const ToDoList = () => {
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
                        <th>Change Status</th>
                        <th>Status</th>
                        <th>Change Assignee</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>nc </td>
                        <td>dkjkbv</td>
                        <td>jfvjkfd</td>
                        <td>fdv</td>
                        <td>fdvf</td>
                        <td>dfvd</td>
                        <td>dfvdv</td>
                    </tr>
                    <tr>
                        <td>nc </td>
                        <td>dkjkbv</td>
                        <td>jfvjkfd</td>
                        <td>fdv</td>
                        <td>fdvf</td>
                        <td>dfvd</td>
                        <td>dfvdv</td>
                    </tr>
                    <tr>
                        <td>nc </td>
                        <td>dkjkbv</td>
                        <td>jfvjkfd</td>
                        <td>fdv</td>
                        <td>fdvf</td>
                        <td>dfvd</td>
                        <td>dfvdv</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ToDoList