import React from 'react'
import Organization from '../components/Organization'
import { Card } from 'semantic-ui-react'
import { eventIsOngoing } from '../helperFunctions/givingEvents'

const OrganizationList = ({ organizations, getOrgEvents, createEvent }) => {

  const sortByOngoningEvents = (org1, org2) => {
    return getOrgEvents(org2.id).filter(eventIsOngoing).length - getOrgEvents(org1.id).filter(eventIsOngoing).length
  }
  return (
    <Card.Group>
      {[...organizations].sort(sortByOngoningEvents).map(o => <Organization key={o.id} organization={o} getOrgEvents={getOrgEvents} createEvent={createEvent} />)}
    </Card.Group>
  )
}

export default OrganizationList
