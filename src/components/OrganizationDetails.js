import React from 'react'
import { eventIsOngoing, eventIsFinished, eventIsUpcoming } from '../helperFunctions/givingEvents'

const OrganizationDetails = ({ organization }) => {
  return (
    <>
      <h3>{organization.name}</h3>

      <h4>Current Events</h4>
      <ul>
        {organization.giving_events.filter(eventIsOngoing).map(e => <li key={e.id}>{e.name}</li>)}
      </ul>

      <h4>Upcoming Events</h4>
      <ul>
        {organization.giving_events.filter(eventIsUpcoming).map(e => <li key={e.id}>{e.name}</li>)}
      </ul>

      <h4>Past Events</h4>
      <ul>
        {organization.giving_events.filter(eventIsFinished).map(e => <li key={e.id}>{e.name}</li>)}
      </ul>
    </>
  )
}

export default OrganizationDetails