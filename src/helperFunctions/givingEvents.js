import moment from 'moment'

export const eventIsOngoing = e => {
  return moment().isBetween(e.start_date, e.end_date)
}

export const eventIsFinished = e => {
  return moment().isAfter(e.end_date)
}

export const eventIsUpcoming = e => {
  return moment().isBefore(e.start_date)
}