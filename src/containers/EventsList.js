import React from 'react'
import Event from '../components/Event'

const EventsList = ({ events, status }) => {
  return (
    <ul>
      { events.map(e => <Event key={e.id} event={e} status={status} />)}
    </ul>

  )
}

export default EventsList