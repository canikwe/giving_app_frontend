import moment from 'moment'

export const eventIsOngoing = e => moment().isBetween(e.start_date, e.end_date)
export const filterOngoingEvents = events => events.filter(eventIsOngoing)

export const eventIsFinished = e => moment().isAfter(e.end_date)
export const filterFinishedEvents = events => events.filter(eventIsFinished)

export const eventIsUpcoming = e => moment().isBefore(e.start_date)
export const filterUpcomingEvents = events => events.filter(eventIsUpcoming)

export const parseEventDate = date => moment(date).format('YYYY-MM-DD')