import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

const OrganizationForm = ({ createOrganization }) => {
  const [organization, setOrganization] = useState({
    name: '',
    address: '',
    description: '',
  })

  const handleChange = e => setOrganization({...organization, [e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault()
     createOrganization(organization)
  }

  return (
    <Segment size='large'>
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' value={organization.name} onChange={handleChange} />
      </Form.Field>
      <Form.Field>
        <label htmlFor='address'>Address</label>
       <input name='address' type='text' value={organization.address} onChange={handleChange} />
      </Form.Field>
      <Form.TextArea 
        label='Description' 
        placeholder='Tell us more about your organization...' 
        name='description' 
        value={organization.description} 
        onChange={handleChange} 
      />
      <Button type='submit'>Submit</Button>
    </Form>
    </Segment>
  )

}

export default OrganizationForm