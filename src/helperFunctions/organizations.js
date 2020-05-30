
export const getUserOrganizations = (userId, organizations) => {
  return organizations.filter(o => o.admin_id === userId)
}