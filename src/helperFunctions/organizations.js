import { eventIsOngoing } from './givingEvents'

export const getCurrentOrganizations = (organizations) => {
  return organizations.filter(o => o.giving_events.some(eventIsOngoing))
}

export const getUserOrganizations = (userId, organizations) => {
  return organizations.filter(o => o.admin_id === userId)
}