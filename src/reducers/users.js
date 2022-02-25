import { Types } from '../actions/users';

const initialState = { items: [] };

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.GET_USER_SUCCESS: {
      return {
        ...state,
        items: action.payload.items
      }
    }

    default: {
      return state;
    }
  }
}