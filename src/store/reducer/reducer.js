import * as TYPES from '../types'

export const initialState = {
  user: {},
  users: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.SET_USERS:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
