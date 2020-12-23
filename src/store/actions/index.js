import * as TYPES from '../types'

export const setUser = user => {
  return { type: TYPES.SET_USER, payload: user }
}

export const setUsers = users => {
  return { type: TYPES.SET_USERS, payload: users }
}

