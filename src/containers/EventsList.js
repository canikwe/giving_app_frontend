import React from 'react'
import Event from '../components/Event'
import { Table } from 'semantic-ui-react'

const EventsList = ({ events, getDonations }) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Giving Event Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
          <Table.HeaderCell>Total Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {events.map(e => <Event key={e.id} event={e} getDonations={getDonations} />) }
      </Table.Body>
    </Table>

  )
}

export default EventsList