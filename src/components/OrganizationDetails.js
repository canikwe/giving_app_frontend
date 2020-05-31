import React, { useState } from 'react'
import { filterOngoingEvents, filterFinishedEvents, filterUpcomingEvents } from '../helperFunctions/givingEvents'
import EventsList from '../containers/EventsList'
import EventForm from '../containers/EventForm'

const OrganizationDetails = ({ organization: { id, name, description, address }, createEvent, getOrgEvents, showNewForm }) => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{address}</p>

      <h4>Ongoing Events</h4>
      <EventsList events={filterOngoingEvents(getOrgEvents(id))} status='still going'/>

      <h4>Upcoming Events</h4>
      <EventsList events={filterUpcomingEvents(getOrgEvents(id))} status='coming soon'/>

      <h4>Past Events</h4>
      <EventsList events={filterFinishedEvents(getOrgEvents(id))} status='finished!'/>

      { showNewForm && <button onClick={() => setModal(!modal)}>Create a new Giving Event!</button> }

      {modal && <EventForm organizationId={id} submitForm={createEvent} giving_event={null} />}
    </>
  )
}

export default OrganizationDetails