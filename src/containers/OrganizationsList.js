import React from 'react'
import Organization from '../components/Organization'

const OrganizationList = ({ organizations, getOrgEvents }) => {

  return (
    <div>
      {organizations.map(o => <Organization key={o.id} organization={o} getOrgEvents={getOrgEvents} />)}
    </div>
  )
}

export default OrganizationList
