import React from 'react'
import './ComponentStyles/Loader.css'
const Loader = () => {
  return (
    <div className='LoaderMainBox'>
      <img src="https://icon-library.com/images/waiting-icon-gif/waiting-icon-gif-1.jpg" alt="loader" />
      <h4>Loading...</h4>
      <p>Refresh if data is not displayed after 5 seconds</p>
    </div>
  )
}

export default Loader