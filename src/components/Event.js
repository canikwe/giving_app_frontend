import React from 'react'
import { Link } from 'react-router-dom'
import { formatEventDate } from '../helperFunctions/givingEvents'


const Event = ({ event }) => {
  return (
    <li>
      <Link to={`/giving_events/${event.id}`}>{event.name}</Link> - {formatEventDate(event.start_date)}
      </li>
  )
}

export default Event
