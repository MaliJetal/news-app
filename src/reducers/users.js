import { Types } from '../actions/users';

const initialState = { items: [], error: "" };

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.GET_USER_SUCCESS: {
      return {
        ...state,
        items: action.payload.items
      }
    }

    case Types.USER_ERROR:{
      return{
        ...state,
        error: action.payload.error
      }
    }

    default: {
      return state;
    }
  }
}