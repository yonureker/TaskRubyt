export const fetchAllUsers = () => (
  $.ajax({
    method: 'GET',
    url: 'api/users'
  })
)

export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`,
    data: { user }
  })
)

