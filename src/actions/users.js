export const Types = {
  GET_USER_REQUEST: "users/get_user_request",
  GET_USER_SUCCESS: "users/get_user_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  DELETE_USER_REQUEST: "users/delete_user_request",
  USER_ERROR: "users/user_error"
}

export const getUsersRequest= () => ({
  type: Types.GET_USER_REQUEST
});

export const getUserSuccess = ({items}) => ({
  type: Types.GET_USER_SUCCESS,
  payload: {
    items
  }
});

export const createUserRequest = ({firstName, lastName}) => ({
  type: Types.CREATE_USER_REQUEST,
  payload: {
    firstName,
    lastName
  }
})

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload:{
    userId
  }
})

export const usersError = ({error}) => ({
  type:Types.USER_ERROR,
  payload:{
    error
  }
})