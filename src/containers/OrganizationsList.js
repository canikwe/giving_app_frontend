import React from 'react'
import Organization from '../components/Organization'

const OrganizationList = ({ organizations, getOrgEvents, createEvent }) => {

  return (
    <div>
      {organizations.map(o => <Organization key={o.id} organization={o} getOrgEvents={getOrgEvents} createEvent={createEvent} />)}
    </div>
  )
}

export default OrganizationList
