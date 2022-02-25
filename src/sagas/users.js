import {takeEvery, takeLatest, call, put, fork} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers(){
  try{
    const result = yield call(api.getUsers);
    yield put(actions.getUserSuccess({items: result.data.data}));
  }
  catch(e){

  }
}

function* watchGetUsersRequest(){
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

function* createUser(action){
  call(api.createUser(), action.firstName, action.lastName)
  yield;
}

function* watchCreateUserRequest(){
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest)
]

export default usersSagas;