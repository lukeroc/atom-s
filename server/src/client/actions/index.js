export const FETCH_USERS = 'FETCH_USERS'

export const fetchUsers = () => async (dispatch, getState, api) => {

  // api is the server and client axios instane
  // Used instead of axios directly to support SSR authenticaation
  // By doing so, the same action creator can be used by client and server
  // eventhough they have 2 separate configs
  const payload = await api.get('/users')

  dispatch({
    type: FETCH_USERS,
    payload
  })
}
