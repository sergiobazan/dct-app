import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/index";
import { GET_MOVIES_SUCCESS } from "../actions";

export const movieReducer = (state = { movies: [] }, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({ movieReducer });
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;
