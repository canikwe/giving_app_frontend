import React from 'react'
import moment from 'moment'

const EventDetails = ({event: {name, target_amount, description, start_date, end_date, organization_id},  getOrganization }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>Organized by: { getOrganization(organization_id).name }</h2>
      <p>Target Amount: {target_amount}</p>
      <p>{description}</p>
      <p>Starting on {moment(start_date).format('MMM Do, YYYY')}</p>
      <p>Ending on {moment(end_date).format('MMM Do, YYYY')}</p>
    </>
  )
}

export default EventDetails
