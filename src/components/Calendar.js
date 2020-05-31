import React from 'react'
import { useHistory } from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Calendar = ({ events }) => {
  const history = useHistory()

  const renderEventOptions = () => {
    return events.map(e => ({
      id: e.id,
      title: e.name,
      start: e.start_date,
      end: e.end_date
    }))
  }

  const handleEventClick = ({ event }) => {
    history.push(`/giving_events/${event.id}`)
  }

    return (
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[dayGridPlugin]}
        events={renderEventOptions()}
        eventClick={handleEventClick}
      />
    )

  
}

export default Calendar