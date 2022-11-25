import { call, put, takeEvery } from "redux-saga/effects";
import client from "../../axios";
import { GET_MOVIES, GET_MOVIES_SUCCESS } from "../actions";

async function moviesFetch(currentPage) {
  return (await client.get(`movies/?page=${currentPage}`)).data;
}

function* getMovies(action) {
  const movies = yield call(moviesFetch, action.currentPage);
  yield put({ type: GET_MOVIES_SUCCESS, movies });
}

function* mySaga() {
  yield takeEvery(GET_MOVIES, getMovies);
}

export default mySaga;
