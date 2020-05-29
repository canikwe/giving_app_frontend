import moment from 'moment'

export const getCurrentOrganizations = (organizations) => {
  return organizations.filter(o => o.giving_events.some(e => {
    return moment().isBetween(e.start_date, e.end_date)
  }))
}