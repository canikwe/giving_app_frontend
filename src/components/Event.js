import React from 'react'
import { Link } from 'react-router-dom'

const Event = ({ event, status }) => {
  return (
    <Link to={`/giving_events/${event.id}`}>
      <li>
        {event.name} - {status}
      </li>
    </Link>
  )
}

export default Event
