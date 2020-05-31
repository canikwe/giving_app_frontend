import React, { useState } from 'react'
import { parseEventDate } from '../helperFunctions/givingEvents'
import { Segment, Form, Button, Header } from 'semantic-ui-react'

const EventForm = ({ organizationId, submitForm, giving_event }) => {
  const [givingEvent, updateGivingEvent] = useState(initialState())

  function initialState() {
    if (organizationId) {
      return ({
        name: '',
        target_amount: 10,
        description: '',
        start_date: parseEventDate(new Date()),
        end_date: parseEventDate(new Date()),
        organization_id: organizationId
      })
    } else {
      return giving_event
    }
  }

  const handleChange = e => {
    if (e.target.name === 'target_amount') {
      updateGivingEvent({ ...givingEvent, [e.target.name]: e.target.value.length ? parseInt(e.target.value) : 0 })
    } else {
      updateGivingEvent({ ...givingEvent, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    submitForm(givingEvent)
  }

  return (
    <Segment>
      <Header>Create a New Event</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} value={givingEvent.name} />
        </Form.Field>

        <Form.Field>
          <label htmlFor='target_amount'>Target Amount:</label>
          <input type='number' name='target_amount' onChange={handleChange} value={givingEvent.target_amount} step='10' min='10' required />
        </Form.Field>

        <Form.Field>
          <label htmlFor='description'>Description:</label>
          <textarea name='description' onChange={handleChange} value={givingEvent.description} />
        </Form.Field>

        <Form.Field>
          <label htmlFor='start_date'>Start Date:</label>
          <input type='date' name='start_date' value={givingEvent.start_date} onChange={handleChange}/>
        </Form.Field>

        <Form.Field>
          <label htmlFor='end_date'>End Date:</label>
          <input type='date' name='end_date' value={givingEvent.end_date} onChange={handleChange}/>
        </Form.Field>
        <Button type='submit'>{giving_event ? 'Update Event' : 'Create Event'} </Button>

      </Form>
    </Segment>
  )
}

export default EventForm