import React from 'react'
import { Link } from 'react-router-dom'
import EventsList from '../containers/EventsList'

const Organization = ({ organization: { id, name, description, address, giving_events }, getOrgEvents }) => {
  return (
    <div>
      <Link to={`/organizations/${id}`} >
        <p>{name}</p>
      </Link>

      { getOrgEvents(id).length ? 
        <>
          <p>Giving Events: </p>
          <EventsList events={getOrgEvents(id)} status='' />
        </>
        :
        <p>No giving events, yet!</p>
      }
    </div>
  )
}

export default Organization