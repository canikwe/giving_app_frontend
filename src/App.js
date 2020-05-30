import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory} from "react-router-dom"
import OrganizationsList from './containers/OrganizationsList'
import NavBar from './components/NavBar'
import { getUserOrganizations } from './helperFunctions/organizations'
import OrganizationForm from './containers/OrganizationForm'
import Profile from './components/Profile'
import OrganizationDetails from './components/OrganizationDetails'
import EventsList from './containers/EventsList'
import { filterOngoingEvents } from './helperFunctions/givingEvents'
import EventDetails from './components/EventDetails'

function App() {
  const [organizations, setOrganizations] = useState([])
  const [givingEvents, setGivingEvents] = useState([])
  const [donations, setDontations] = useState([])
  const [currentUser, setCurrentUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch('http://localhost:3000/organizations')
      .then(res => res.json())
      .then(setOrganizations)

    fetch('http://localhost:3000/giving_events')
      .then(res => res.json())
      .then(setGivingEvents)

    fetch('http://localhost:3000/donations')
      .then(res => res.json())
      .then(setDontations)
      
      fetch('http://localhost:3000/users/1') //hardcode for now
        .then(res => res.json())
        .then(setCurrentUser)

  }, [])

  const createOrganization = orgObj => {
    fetch('http://localhost:3000/organizations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ ...orgObj, admin_id: currentUser.id})
    })
    .then(res => res.json())
    .then(newOrg => {
      if (newOrg.id) {
        setOrganizations([...organizations, newOrg])
        history.push('/organizations')
      }
    })
  }

  const createEvent = eventObj => {
    fetch('http://localhost:3000/giving_events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(eventObj)
    })
    .then(res => res.json())
    .then(givingEvent => {
      const updatedGivingEvents = [...givingEvents, givingEvent]
      setGivingEvents(updatedGivingEvents)
    })
  }

// ------------ Helper Functions ------------
  const getOrgEvents = orgId => {
    return givingEvents.filter(e => e.organization_id === orgId)
  }

  const getOrganization = orgId => {
    return organizations.find(o => o.id === orgId)
  }

  const getDonations = givingEventId => {
    return donations.filter(d => d.id === givingEventId)
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
            <EventsList events={filterOngoingEvents(givingEvents)} status='Ongoing Events' />
          </>
        </Route>

        {/* --------- Organizations --------- */}
        <Route exact path='/organizations'>
          <>
            <h1>Organizations</h1>
            <OrganizationsList organizations={organizations} getOrgEvents={getOrgEvents} />
          </>
        </Route>
        <Route exact path='/organizations/new'>
          <h1>Create New Organization</h1>
          <OrganizationForm createOrganization={createOrganization} />
        </Route>
        <Route 
          exact 
          path='/organizations/:id' 
          render={props => {
            const org = organizations.find(o => o.id === parseInt(props.match.params.id))
            
            if (org) {
              return (
                <OrganizationDetails organization={org} createEvent={createEvent} getOrgEvents={getOrgEvents} />
              )
            } else {
              return <h1>Loading...</h1>
            }
          }}
        />

        {/* ------------- Events ------------- */}
        <Route exact path='/giving_events/:id' render={({ match }) => {
          const givingEvent = givingEvents.find(e => e.id === parseInt(match.params.id))

          if (givingEvent && organizations.length) {
            return <EventDetails event={givingEvent} getOrganization={getOrganization} getDonations={getDonations}/>
          } else {
            return <h1>Loading...</h1>
          }
        }} />
          
        {/* ------------- Users ------------- */}
        <Route exact path='/profile'>
          <h1>Welcome {currentUser.name}</h1>
          <Profile user={currentUser} organizations={getUserOrganizations(currentUser.id, organizations)} getOrgEvents={getOrgEvents} />
        </Route>
      </Switch>
    </>
  );
}

export default App;
