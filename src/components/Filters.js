import React from 'react'
import { Form, Select, Input } from 'semantic-ui-react'

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = (e, {name, value}) => {
    
    setFilters({ ...filters, [name]: value })
  }

  const dateOptions = [
    {key: 'all', value: 'all', text: 'All'},
    {key: 'ongoing', value: 'ongoing', text: 'Ongoing'},
    {key: 'upcoming', value: 'upcoming', text: 'Upcoming'},
    {key: 'finished', value: 'finished', text: 'Finished'}
  ]
  return (
    <Form>
      <Form.Group>
        <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='Search by Event Name'
          placeholder='UVa Giving...'
          name='searchTerm'
          value={filters.searchTerm} 
          onChange={handleFilterChange} 
        />
        <Form.Field
          control={Select}
          options={dateOptions}
          label={{ children: 'Filter by Date', htmlFor: 'form-select-control-date' }}
          placeholder='Upcoming'
          search
          searchInput={{ id: 'form-select-control-date' }}
          name='date'
          onChange={handleFilterChange}
        />
      </Form.Group>
    </Form>
  )
}

export default Filters