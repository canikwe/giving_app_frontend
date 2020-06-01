import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import { eventIsOngoing } from '../helperFunctions/givingEvents'

const Organization = ({ organization: { id, name, description, address }, getOrgEvents }) => {
  return (
    <Card>
      <Card.Content as={Link} to={`/organizations/${id}`}>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{address}</Card.Meta>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        { getOrgEvents(id).length ? 
          <p><Icon name='calendar check outline' />{getOrgEvents(id).filter(eventIsOngoing).length} Ongoing Giving Event!</p>
          :
          <p>No ongoing giving events</p>
        }
      </Card.Content>

    </Card>
  )
}

export default Organization