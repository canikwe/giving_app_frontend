import React from 'react'

const Organization = ({ organization: { name, description, address, giving_events } }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{address}</p>
      <ul>
        {giving_events.map(g => <li key={g.id}>{g.name}</li>)}
      </ul>
    </div>
  )
}

export default Organization