import { combineReducers } from 'redux'

import usersReducer from './users.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
  users: usersReducer,
  auth: authReducer
})
