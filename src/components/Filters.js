import React from 'react'

const Filters = ({ filters, setFilters }) => {
  const handleFilterChange = e => setFilters({ ...filters, [e.target.name]: e.target.value })

  return (
    <section>
      <input type='text' name='searchTerm' value={filters.searchTerm} onChange={handleFilterChange}/>
      <select name='date' onChange={handleFilterChange}>
        <option value='all'>All</option>
        <option value='finished'>Finished</option>
        <option value='ongoing'>Ongoing</option>
        <option value='upcoming'>Upcoming</option>
      </select>
    </section>
  )
}

export default Filters