import React, { useState } from 'react'
import OrganizationList from '../containers/OrganizationsList'
// import { Link } from 'react-router-dom'
// import EventForm from '../containers/EventForm'

const Profile = ({ user, organizations, getOrgEvents, userDonations, getGivingEvent, getOrganization, createEvent }) => {
  // const [featureOrganization, setFeatureOrganization] = useState(false)

  // const handleModal = (o) => {
  //   setFeatureOrganization(o)
  // }

  const renderOrgName = donation => {
    const givingEvent = getGivingEvent(donation.giving_event_id)
    const org = getOrganization(givingEvent.organization_id)
    return org.name
  }
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <h3>My Donations: </h3>
      <ul>
        {userDonations.map(d => <li key={d.id}>You gave ${d.amount} to {renderOrgName(d)}</li>) }
      </ul>
      <h3>My Organizations</h3>
      <OrganizationList organizations={organizations} getOrgEvents={getOrgEvents} createEvent={createEvent} />
      {/* { organizations.map(o => (
        <li key={o.id}>
          <Link to={`/organizations/${o.id}`}>{o.name} </Link>
          {!getOrgEvents(o.id).length && <span> No giving events, yet! <button onClick={() => handleModal(o)}>Create one now!</button></span>
          }
        </li>
      ))}

      {featureOrganization.id && <EventForm organizationId={featureOrganization.id} submitForm={createEvent} giving_event={null} />} */}
    </div>
  )
}

export default Profile