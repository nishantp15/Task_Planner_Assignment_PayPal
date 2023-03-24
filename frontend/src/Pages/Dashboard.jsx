import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import SprintDetails from '../Components/SprintDetails'
import ToDoList from '../Components/ToDoList';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='DashBoardMainBox'>
        <Sidebar/>
        <div className='DashBoardSubMainBox'>
            <SprintDetails/>
           <ToDoList/> 
        </div>
    </div>
  )
}

export default Dashboard