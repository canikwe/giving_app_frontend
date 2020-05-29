import React, { useState, useEffect } from 'react'

const OrganizationForm = ({ currentUserId, createOrganization }) => {
  const [organization, setOrganization] = useState({
    name: '',
    address: '',
    description: '',
    admin_id: currentUserId
  })

  const handleChange = e => setOrganization({...organization, [e.target.name]: e.target.value})

  const handleSubmit = e => {
    e.preventDefault()
     createOrganization(organization)
  }

  useEffect(() => {
    setOrganization({ ...organization, admin_id: currentUserId})
  }, [currentUserId])

  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' value={organization.name} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='address'>Address</label>
       <input name='address' type='text' value={organization.address} onChange={handleChange} />
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input name='description' type='text' value={organization.description} onChange={handleChange} />
      </div>
      <input type='submit' />
    </form>
  )

}

export default OrganizationForm