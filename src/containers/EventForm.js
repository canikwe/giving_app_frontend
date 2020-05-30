import React, { useState } from 'react'
import { parseEventDate } from '../helperFunctions/givingEvents'

const EventForm = ({ organizationId, createEvent }) => {
  const [givingEvent, updateGivingEvent] = useState({
    name: '',
    target_amount: 0,
    description: '',
    start_date: parseEventDate(new Date()),
    end_date: parseEventDate(new Date()),
    organization_id: organizationId
  })

  const handleChange = e => {
    if (e.target.name === 'target_amount') {
      updateGivingEvent({ ...givingEvent, [e.target.name]: e.target.value.length ? parseInt(e.target.value) : 0 })
    } else {
      updateGivingEvent({ ...givingEvent, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    createEvent(givingEvent)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' name='name' onChange={handleChange} value={givingEvent.name} />
      </div>

      <div>
        <label htmlFor='target_amount'>Target Amount:</label>
        <input type='number' name='target_amount' onChange={handleChange} value={givingEvent.target_amount} />
      </div>

      <div>
        <label htmlFor='description'>Description:</label>
        <textarea name='description' onChange={handleChange} value={givingEvent.description} />
      </div>

      <div>
        <label htmlFor='start_date'>Start Date:</label>
        <input type='date' name='start_date' value={givingEvent.start_date} onChange={handleChange}/>
      </div>

      <div>
        <label htmlFor='end_date'>End Date:</label>
        <input type='date' name='end_date' value={givingEvent.end_date} onChange={handleChange}/>
      </div>
      <input type='submit' value='Create Event' />

    </form>
  )
}

export default EventForm