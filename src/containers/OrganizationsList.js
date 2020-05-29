import React, { useState, useEffect } from 'react'
import Organization from '../components/Organization'

const OrganizationList = () => {

  const [organizations, setOrganizations] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/organizations')
    .then(res => res.json())
    .then(setOrganizations)
  }, [])

  return (
    <div>
      { organizations.map(o => <Organization key={o.id} organization={o} />)}
    </div>
  )
}

export default OrganizationList
