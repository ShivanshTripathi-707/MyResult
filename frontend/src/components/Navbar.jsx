import React from 'react'
import "./Components.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to="/"><h1>MyResult</h1></Link>
      <Link to="/know-more"><button>Know More</button></Link>
    </div>
  )
}

export default Navbar