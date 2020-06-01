import React from 'react'
import { useHistory } from "react-router-dom"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment'


const Calendar = ({ events }) => {
  const history = useHistory()

  const parseEndDate = (e) => {
    if (e.start_date === e.end_date) {
      return e.end_date
    }
    return moment(e.end_date).add(1, 'day').format('YYYY-MM-DD')
  }

  const renderEventOptions = () => {
    return events.map(e => ({
      id: e.id,
      title: e.name,
      start: e.start_date,
      end: parseEndDate(e)
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