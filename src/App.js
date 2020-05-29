import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory} from "react-router-dom"
import OrganizationsList from './containers/OrganizationsList'
import NavBar from './components/NavBar'
import { getCurrentOrganizations } from './helperFunctions/organizations'
import OrganizationForm from './containers/OrganizationForm'

function App() {
  const [organizations, setOrganizations] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3000/organizations')
      .then(res => res.json())
      .then(setOrganizations)
      
      fetch('http://localhost:3000/users/1') //hardcode for now
        .then(res => res.json())
        .then(setCurrentUser)

  }, [])

  const createOrganization = (orgObj) => {
    fetch('http://localhost:3000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json()'
      },
      body: JSON.stringify(orgObj)
    })
    .then(res => res.json())
    .then(newOrg => {
      if (newOrg.id) {
        setOrganizations([...organizations, newOrg])
        history.push('/organizations')
      }
    })
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <>
            <header className="App-header">
              <h1>My Awesome Giving App</h1>
            </header>
            <OrganizationsList organizations={getCurrentOrganizations(organizations)}/>
          </>
        </Route>
        {/* --------- Organizations --------- */}
        <Route exact path='/organizations'>
          <>
            <h1>Organizations</h1>
            <OrganizationsList organizations={organizations} />
          </>
        </Route>
        <Route exact path='/organizations/new'>
          <h1>Create New Organization</h1>
          <OrganizationForm currentUserId={currentUser.id} createOrganization={createOrganization} />
        </Route>
        <Route exact path='/organizations/:id'>
          <h1>Organization's Details go here</h1>
        </Route>

        {/* ------------- Users ------------- */}
        <Route exact path='/profile'>
          <h1>Welcome {currentUser.name}</h1>
        </Route>
      </Switch>
    </>
  );
}

export default App;
