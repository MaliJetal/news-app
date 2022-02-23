import {takeEvery, call, fork} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUsers(){
  try{
    const result = yield call(api.getUsers);
    console.log("Result: " , result.data);
  }
  catch(e){

  }
}

function* watchGetUsersRequest(){
  yield takeEvery(actions.Types.GET_USER_REQUEST, getUsers);
}

const usersSagas = [
  fork(watchGetUsersRequest)
]

export default usersSagas;