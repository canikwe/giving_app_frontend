import moment from 'moment'

export const eventIsOngoing = e => moment().isBetween(e.start_date, e.end_date) || moment().isSame(e.start_date, 'day')

export const filterOngoingEvents = events => events.filter(eventIsOngoing)

export const eventIsFinished = e => !moment().isSame(e.end_date, 'day') && moment().isAfter(e.end_date)
export const filterFinishedEvents = events => events.filter(eventIsFinished)

export const eventIsUpcoming = e => moment().isBefore(e.start_date)
export const filterUpcomingEvents = events => events.filter(eventIsUpcoming)

export const parseEventDate = date => moment(date).format('YYYY-MM-DD')

export const formatEventDate = date => moment(date).format('MMMM Do')

export const sortEvents = (givingEvents) => {
  return [...givingEvents].sort((a, b) => {
    if (!eventIsFinished(a) && !eventIsFinished(b) ) {
      return moment(a.start_date) > moment(b.start_date) ? 1 : -1
    }
    return eventIsFinished(a) ? 1 : -1
  })
  
}