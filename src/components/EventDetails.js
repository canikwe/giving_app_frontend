import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Segment, Divider, Icon, Form, Button } from 'semantic-ui-react'
import EventProgressBar from './EventProgressBar'

const EventDetails = ({event: {id, name, target_amount, description, start_date, end_date, organization_id},  getOrganization, getDonations, addDonation, currentUserId }) => {
  const [donation, setDonation] = useState({
    amount: 10
  })
  const donatedAmount = () => getDonations(id).reduce((a, b) => {
    return a + b.amount
  }, 0)

  const handleChange = e => setDonation({amount: parseInt(e.target.value)})

  const handleSubmit = e => {
    e.preventDefault()
    
    addDonation({ ...donation, giving_event_id: id })
    setDonation({amount: 10})
  }

  const admin = () => getOrganization(organization_id).admin_id === currentUserId

  return (
    <Segment>
      <section>
        <h1>{name}</h1>

        <h4>
          Organized for: <Link to={`/organizations/${organization_id}`}>{getOrganization(organization_id).name} </Link>
        </h4>

        <EventProgressBar 
          id={id} 
          target_amount={target_amount} 
          getDonations={getDonations} 
        />
       
       {
          getDonations(id).length ?
            <p>{getDonations(id).length} donations so far <span>🎉</span></p>
            :
            <p>No donations so far <Icon name='frown outline' /></p>
       }
        
        <p>{description}</p>
      </section>

      <Divider />

      <section>
        <h3>Giving Event Dates:</h3>
        Starting on {moment(start_date).format('MMM Do, YYYY')} <br />
        Ending on {moment(end_date).format('MMM Do, YYYY')}
      </section>

      <Divider />

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
        <Form onSubmit={handleSubmit}>
          <label htmlFor='donation_amount'>Amount: </label>
          <input type='number' name='amount' value={donation.amount} onChange={handleChange} step='10' min='0'required />
          <Button type='submit'>Submit</Button>
        </Form>
      </section>
    </Segment>
  )
}

export default EventDetails
