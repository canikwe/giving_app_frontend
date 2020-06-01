import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { Segment, Divider, Icon, Form, Button } from 'semantic-ui-react'
import EventProgressBar from './EventProgressBar'
import { eventIsOngoing } from '../helperFunctions/givingEvents'

const EventDetails = ({event: {id, name, target_amount, description, start_date, end_date, organization_id},  getOrganization, getDonations, addDonation, currentUserId }) => {
  const [donation, setDonation] = useState({
    amount: 10
  })

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

        {
          admin() && (
            <section>
              <Link to={`/giving_events/${id}/edit`}>
                <Button floated='right'>Update Event</Button>
              </Link>
            </section>
          )
        }

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
            <p>{getDonations(id).length} donations so far <span role='img' aria-label='confetti'>🎉</span></p>
            :
            <p>No donations so far <Icon name='frown outline' /></p>
       }
        
        <p>{description}</p>
      </section>

      <Divider />

      <section>
        <h3>Giving Event Dates:</h3>
        {start_date === end_date ? (
          <div>
            {moment(start_date).format('MMM Do, YYYY')}
          </div>
          ) : (
          <>
            <div>
              From {moment(start_date).format('MMM Do, YYYY')} 
            </div>
            <div>
              to {moment(end_date).format('MMM Do, YYYY')}
            </div>
          </>
        )}
      </section>

      <Divider />

       {
         eventIsOngoing({start_date, end_date}) && 
          <section>
            <h4>Donate Today!</h4>
            <Form onSubmit={handleSubmit}>
              <label htmlFor='donation_amount'>Amount: </label>
              <input type='number' name='amount' value={donation.amount} onChange={handleChange} step='10' min='0'required />
              <Button type='submit'>Submit</Button>
            </Form>
          </section>
       }

    </Segment>
  )
}

export default EventDetails
