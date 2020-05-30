import React from 'react'
import OrganizationList from '../containers/OrganizationsList'

const Profile = ({ user, organizations, getOrgEvents }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.affiliation}</p>
      <p>Graduated in {user.graduation_year}</p>

      <OrganizationList organizations={organizations} getOrgEvents={getOrgEvents} />
    </div>
  )
}

export default Profile