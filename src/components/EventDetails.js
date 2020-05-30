import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const EventDetails = ({event: {id, name, target_amount, description, start_date, end_date, organization_id},  getOrganization, getDonations, addDonation, currentUserId }) => {
  const [donation, setDonation] = useState({
    amount: 0
  })
  const donatedAmount = () => getDonations(id).reduce((a, b) => {
    return a + b.amount
  }, 0)

  const handleChange = e => setDonation({amount: parseInt(e.target.value)})

  const handleSubmit = e => {
    e.preventDefault()
    
    addDonation({ ...donation, giving_event_id: id })
    setDonation({amount: 0})
  }

  const admin = () => getOrganization(organization_id).admin_id === currentUserId

  return (
    <>
      <section>
        <h1>{name}</h1>
        <h2>Organized by: { getOrganization(organization_id).name }</h2>
        <p>Target Amount: {target_amount}</p>
        <p>${target_amount - donatedAmount()} more to go!</p>
        <p>{getDonations(id).length} donations so far</p>
        <p>{description}</p>
        <p>Starting on {moment(start_date).format('MMM Do, YYYY')}</p>
        <p>Ending on {moment(end_date).format('MMM Do, YYYY')}</p>
      </section>

      <section>
        <h3>Dontations:</h3>
        ${donatedAmount()}
      </section>

      {
        admin() && (
          <section>
            <Link to={`/giving_events/${id}/edit`}>
              <button>Update Event</button>
            </Link>
          </section>
        )
      }
      

      <section>
        <h4>Donate Today!</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor='donation_amount'>Amount: </label>
          <input type='number' name='amount' value={donation.amount} onChange={handleChange} />
          <input type='submit' />
        </form>
      </section>
    </>
  )
}

export default EventDetails
