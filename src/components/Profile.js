import React from 'react'
import OrganizationList from '../containers/OrganizationsList'

const Profile = ({ user, organizations, donations}) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.affiliation}</p>
      <p>Graduated in {user.graduation_year}</p>

      <OrganizationList organizations={organizations} />
    </div>
  )
}

export default Profile