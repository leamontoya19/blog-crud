import React from 'react'
import Logo from "../assets/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src={ Logo } alt='logo'/>
        </div>
        <div className="links">
          <Link className='link'></Link>       </div>
      </div>
    </div>
  )
}

export default Navbar