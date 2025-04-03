import React from 'react'
import "./Pages.css"
import {Link} from "react-router-dom"

const Error = () => {
  return (
    <div className='error'>
      <h1>404!</h1>
      <p>Oops! Page Not <br /> Found</p>
      <Link to="/"><button>Go Back</button></Link>
    </div>
  )
}

export default Error