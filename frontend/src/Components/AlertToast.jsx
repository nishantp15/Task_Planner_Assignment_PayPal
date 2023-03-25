import React from 'react'
import './ComponentStyles/AlertToast.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'
const AlertToast = ({type}) => {
  return (
    <div className='AlertToastMainBox'>
        <p>Done</p>
        <BsFillCheckCircleFill className={type==="deleted" ? "AlertIcone Deleted": "AlertIcon"}/>
    </div>
  )
}

export default AlertToast