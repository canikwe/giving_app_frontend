import React from 'react'
import Event from '../components/Event'

const EventsList = ({ events }) => {
  return (
    <ul>
      { events.map(e => <Event key={e.id} event={e} />) }
    </ul>

  )
}

export default EventsList