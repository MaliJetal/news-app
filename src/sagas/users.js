import {take, takeEvery, takeLatest, call, put, fork} from "redux-saga/effects";
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

function* deleteUser(userId){
  try{
    yield call(api.deleteUser, userId);
    yield call(getUsers);
  }
  catch(err){

  }
}

function* watchDeleteUserRequest(){
  while(true){
    const {payload} = yield take(actions.Types.DELETE_USER_REQUEST);
    console.log(payload);
    yield call(deleteUser, payload.userId)
  }
}

function* createUser({payload}){
  try{
    console.log(payload);
    yield call(api.createUser, {firstName: payload.firstName, lastName: payload.lastName})
    yield call(getUsers);
  }
  catch(err){

  }
}

function* watchCreateUserRequest(){
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest)
]

export default usersSagas;