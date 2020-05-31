import React from 'react'
import { Link } from 'react-router-dom'
import { formatEventDate, eventIsOngoing } from '../helperFunctions/givingEvents'
import { Table, Label } from 'semantic-ui-react'

const Event = ({ event, getDonations }) => {
  return (
    <Table.Row>
      <Table.Cell>
        {eventIsOngoing(event) && <Label color='red' ribbon>Ongoing!</Label>}
        <Link to={`/giving_events/${event.id}`}>{event.name}</Link>
      </Table.Cell>
      <Table.Cell>
        {formatEventDate(event.start_date)}
      </Table.Cell>
      <Table.Cell>${getDonations(event.id).reduce((a, b) => a + b.amount, 0)} of {event.target_amount} raised</Table.Cell>
    </Table.Row>
  )
}

export default Event
