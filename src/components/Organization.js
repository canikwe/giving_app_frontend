import React from 'react'
import { Link } from 'react-router-dom'
import EventsList from '../containers/EventsList'

const Organization = ({ organization: { id, name, description, address, giving_events }, getOrgEvents }) => {
  return (
    <div>
      <Link to={`/organizations/${id}`} >
        <h2>{name}</h2>
      </Link>

      { getOrgEvents(id).length ? 
        <>
          <h3>Giving Events: </h3>
          <EventsList events={getOrgEvents(id)} status='' />
        </>
        :
        <h3>No giving events, yet!</h3>
      }
    </div>
  )
}

export default Organization