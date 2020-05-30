import React, { useState } from 'react'
import { filterOngoingEvents, filterFinishedEvents, filterUpcomingEvents } from '../helperFunctions/givingEvents'
import EventsList from '../containers/EventsList'
import EventForm from '../containers/EventForm'

const OrganizationDetails = ({ organization, createEvent, getOrgEvents }) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <h3>{organization.name}</h3>

      <h4>Current Events</h4>
      <EventsList events={filterOngoingEvents(getOrgEvents(organization.id))} status='still going'/>

      <h4>Upcoming Events</h4>
      <EventsList events={filterUpcomingEvents(getOrgEvents(organization.id))} status='coming soon'/>

      <h4>Past Events</h4>
      <EventsList events={filterFinishedEvents(getOrgEvents(organization.id))} status='finished!'/>

      <button onClick={() => setModal(!modal)}>Create a new Giving Event!</button>

      {modal && <EventForm organizationId={organization.id} createEvent={createEvent}/>}
    </>
  )
}

export default OrganizationDetails