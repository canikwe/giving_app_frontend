import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { Menu, Button } from 'semantic-ui-react'

const NavBar = ({ setLoginModal, loggedIn }) => {
  const location = useLocation()

  return (
    <Menu>
      <Menu.Item
        name='home'
        active={location.pathname === '/'}
        as={Link}
        to='/'
      >
        Home
      </Menu.Item>
      <Menu.Item
        name='organizations'
        active={location.pathname === '/organizations'}
        as={Link}
        to='/organizations'
      >
        Organizations
      </Menu.Item>
      <Menu.Item
        name='organizations/new'
        active={location.pathname === '/organizations/new'}
        as={Link}
        to='/organizations/new'
      >
        Create New Organization
      </Menu.Item>
      <Menu.Item
        name='giving_events'
        active={location.pathname === '/giving_events'}
        as={Link}
        to='/giving_events'
      >
        Giving Events
      </Menu.Item>

      <Menu.Menu position='right'>

      {loggedIn ? <Menu.Item
        name='profile'
        active={location.pathname === '/profile'}
        as={Link}
        to='/profile'
        >
        Profile
        </Menu.Item>
        :
        <Menu.Item>
          <Button onClick={() => setLoginModal(true)}>Login</Button>
        </Menu.Item>
      }
      </Menu.Menu>
    </Menu>
  )
}

export default NavBar