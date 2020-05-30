import React, { useState, useEffect } from 'react'
import { Switch, Route, useHistory, Redirect} from "react-router-dom"
import OrganizationsList from './containers/OrganizationsList'
import NavBar from './components/NavBar'
import { getUserOrganizations } from './helperFunctions/organizations'
import OrganizationForm from './containers/OrganizationForm'
import Profile from './components/Profile'
import OrganizationDetails from './components/OrganizationDetails'
import EventsList from './containers/EventsList'
import { filterOngoingEvents } from './helperFunctions/givingEvents'
import EventDetails from './components/EventDetails'
import EventForm from './containers/EventForm'
import LoginForm from './components/LoginForm'

function App() {
  const [organizations, setOrganizations] = useState([])
  const [givingEvents, setGivingEvents] = useState([])
  const [donations, setDonations] = useState([])
  const [loginModal, setLoginModal] = useState(false)
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
      .then(setDonations)
      
      // fetch('http://localhost:3000/users/1') //hardcode for now
      //   .then(res => res.json())
      //   .then(setCurrentUser)

  }, [])

  const createOrganization = orgObj => {
    if (!currentUser.id) {
      setLoginModal(true)
      return alert('Please sign in first!')
    }

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
      } else {
        alert(newOrg.message)
      }
    })
  }

  const createEvent = eventObj => {
    if (!currentUser.id) {
      setLoginModal(true)
      return alert('Please sign in first!')
    }

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
      if (givingEvent.id) {
        const updatedGivingEvents = [...givingEvents, givingEvent]
        setGivingEvents(updatedGivingEvents)
        history.push(`/giving_events/${givingEvent.id}`)
      } else {
        alert(givingEvent.message)
      }

    })
  }

  const updateEvent = eventObj => {
    if (!currentUser.id) {
      setLoginModal(true)
      return alert('Please sign in first!')
    }

    fetch('http://localhost:3000/giving_events/' + eventObj.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(eventObj)
    })
    .then(res => res.json())
    .then(givingEvent => {
      if (givingEvent.id) {
        const updatedGivingEvents = givingEvents.map(g => g.id === givingEvent.id ? givingEvent : g)
        setGivingEvents(updatedGivingEvents)
        history.push(`/giving_events/${givingEvent.id}`)
      } else {
        alert(givingEvent.message)
      }
    })
  }

  const addDonation = donationObj => {
    if (!currentUser.id) {
      setLoginModal(true)
      return alert('Please sign in first!')
    }

    fetch('http://localhost:3000/donations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({ ...donationObj, donor_id: currentUser.id })
    })
    .then(res => res.json())
    .then(donation => {
      if (donation.id) {
        const updatedDonations = [...donations, donation]
        setDonations(updatedDonations)
      } else {
        alert(donation.message)
      }
    })
  }

  const loginUser = userObj => {
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(currentUser => {
      if (currentUser.id) {
        setCurrentUser(currentUser)
        setLoginModal(false)
      } else {
        alert(currentUser.message)
      }
    })
  }

  const createUser = userObj => {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(userObj)
    })
    .then(res => res.json())
    .then(currentUser => {
      if (currentUser.id) {
        setCurrentUser(currentUser)
        setLoginModal(false)
      } else {
        alert(currentUser.message)
      }
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
    return donations.filter(d => d.giving_event_id === givingEventId)
  }

  const getGivingEvent = givingEventId => {
    return givingEvents.find(e => e.id === givingEventId)
  }

  const getUserDonations = () => {
    return donations.filter(d => d.donor_id === currentUser.id)
  }

  const loggedIn = () => currentUser.id ? true : false

  const admin = orgId => getOrganization(orgId).admin_id === currentUser.id

  return (
    <>
      <NavBar setLoginModal={setLoginModal} loggedIn={loggedIn()}/>
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
        <Route exact path='/giving_events/:id/edit' render={({ match }) => {
          const givingEvent = givingEvents.find(e => e.id === parseInt(match.params.id))

           if (givingEvent && organizations.length) {

             return !loggedIn() || !admin(givingEvent.organization_id) ? <Redirect to='/' /> : <EventForm organizationId={null} giving_event={givingEvent} submitForm={updateEvent} />
          } else {
            return <h1>Loading...</h1>
          }
        }} />

        <Route exact path='/giving_events/:id' render={({ match }) => {
          const givingEvent = givingEvents.find(e => e.id === parseInt(match.params.id))          

          if (givingEvent && organizations.length) {
            return <EventDetails event={givingEvent} getOrganization={getOrganization} getDonations={getDonations} addDonation={addDonation} currentUserId={currentUser.id}/>
          } else {
            return <h1>Loading...</h1>
          }
        }} />
          
        {/* ------------- Users ------------- */}
        <Route exact path='/profile'>
          {loggedIn() ? <Profile user={currentUser} organizations={getUserOrganizations(currentUser.id, organizations)} getOrgEvents={getOrgEvents} userDonations={getUserDonations()} getGivingEvent={getGivingEvent} getOrganization={getOrganization} />
            : <Redirect to='/' />
          }
        </Route>
      </Switch>
      {loginModal && <LoginForm handleLogin={loginUser} handleCreate={createUser} setLoginModal={setLoginModal}/>}

    </>
  );
}

export default App;
