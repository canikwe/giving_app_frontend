import React from 'react'
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/organizations'>Organizations</Link>
      <Link to='/profile'>Profile</Link>
    </nav>
  )
}

export default NavBar