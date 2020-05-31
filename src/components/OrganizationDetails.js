import React, { useState } from 'react'
import { Segment, Button, Modal } from 'semantic-ui-react'
import { filterOngoingEvents, filterFinishedEvents, filterUpcomingEvents } from '../helperFunctions/givingEvents'
import EventsList from '../containers/EventsList'
import EventForm from '../containers/EventForm'

const OrganizationDetails = ({ organization: { id, name, description, address }, createEvent, getOrgEvents, showNewForm, getDonations }) => {
  const [modal, setModal] = useState(false)

  const handleModal = () => setModal(!modal)
  
  return (
    <Segment size='large'>
      <h1>{name}</h1>

      {showNewForm && <Button floated='right' onClick={handleModal}>Create a new Giving Event!</Button>}

      <p>{description}</p>
      <p>{address}</p>

      <h4>Ongoing Events</h4>
      {
        filterOngoingEvents(getOrgEvents(id)).length ?
          <EventsList events={filterOngoingEvents(getOrgEvents(id))} getDonations={getDonations}/>
          :
        <p>None</p>
      }

      <h4>Upcoming Events</h4>
      {
        filterUpcomingEvents(getOrgEvents(id)).length ? 
          <EventsList events={filterUpcomingEvents(getOrgEvents(id))} getDonations={getDonations}/>
        : 
        <p>None</p>
      }

      <h4>Past Events</h4>
      {
        filterFinishedEvents(getOrgEvents(id)).length ? <EventsList events={filterFinishedEvents(getOrgEvents(id))} getDonations={getDonations}/>
        :
        <p>None</p>
      }

   

      {modal && (
        <Modal open={modal} onClose={handleModal}>
          <EventForm organizationId={id} submitForm={createEvent} giving_event={null} />
        </Modal>
      )}
    </Segment>
  )
}

export default OrganizationDetails