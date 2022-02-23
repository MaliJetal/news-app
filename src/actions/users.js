export const Types = {
  GET_USER_REQUEST: "users/get_user_request",
  GET_USER_SUCCESS: "users/get_user_success"
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