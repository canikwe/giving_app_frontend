import React from 'react'
import moment from 'moment'

const EventDetails = ({event: {id, name, target_amount, description, start_date, end_date, organization_id},  getOrganization, getDonations }) => {
  console.log(getDonations(id))

  const donatedAmount = () => getDonations(id).reduce((a, b) => {
    return a + b.amount
  }, 0)

  return (
    <>
      <section>
        <h1>{name}</h1>
        <h2>Organized by: { getOrganization(organization_id).name }</h2>
        <p>Target Amount: {target_amount}</p>
        <p>${target_amount - donatedAmount()} more to go!</p>
        <p>{description}</p>
        <p>Starting on {moment(start_date).format('MMM Do, YYYY')}</p>
        <p>Ending on {moment(end_date).format('MMM Do, YYYY')}</p>
      </section>

      <section>
        <h3>Dontations:</h3>
        ${donatedAmount()}
      </section>
    </>
  )
}

export default EventDetails
