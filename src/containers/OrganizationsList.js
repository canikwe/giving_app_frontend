import React from 'react'
import Organization from '../components/Organization'

const OrganizationList = ({ organizations }) => {

  return (
    <div>
      { organizations.map(o => <Organization key={o.id} organization={o} />)}
    </div>
  )
}

export default OrganizationList
