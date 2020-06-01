import React from 'react'
import OrganizationList from '../containers/OrganizationsList'

const Profile = ({ user, organizations, getOrgEvents, userDonations, getGivingEvent, getOrganization, createEvent }) => {

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
    </div>
  )
}

export default Profile