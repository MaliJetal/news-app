import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import combineReducers  from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(combineReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);