import React from 'react'
import OrganizationList from '../containers/OrganizationsList'

const Profile = ({ user, organizations, getOrgEvents, userDonations, getGivingEvent, getOrganization }) => {

  const renderOrgName = donation => {
    const givingEvent = getGivingEvent(donation.giving_event_id)
    const org = getOrganization(givingEvent.organization_id)
    return org.name
  }
  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <h3>Donations: </h3>
      <ul>
        {userDonations.map(d => <li key={d.id}>You gave ${d.amount} to {renderOrgName(d)}</li>) }
      </ul>

      <OrganizationList organizations={organizations} getOrgEvents={getOrgEvents} />
    </div>
  )
}

export default Profile