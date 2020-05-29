import React from 'react'
import { Link } from 'react-router-dom'

const Organization = ({ organization: { id, name, description, address, giving_events } }) => {
  return (
    <Link to={`/organizations/${id}`} >
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{address}</p>
        <ul>
          {giving_events.map(g => <li key={g.id}>{g.name}</li>)}
        </ul>
      </div>
    </Link>
  )
}

export default Organization