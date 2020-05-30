import React from 'react'
import { Link } from "react-router-dom"

const NavBar = ({ setLoginModal, loggedIn }) => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/organizations'>Organizations</Link>
      <Link to='/organizations/new'>Create New Org</Link>
      { loggedIn ? <Link to='/profile'>Profile</Link>
        :
      <button onClick={() => setLoginModal(true)}>Login</button>}
    </nav>
  )
}

export default NavBar