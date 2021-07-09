import axios from "axios";
import { call, put, take } from "redux-saga/effects";

import entriesTypes from "../actions/entries.actions";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  console.log("I need to get the entries now");
  const result = yield call(axios, "http://localhost:3002/entries");
  console.log(result);
  yield put({ type: entriesTypes.POPULATE_ENTRIES, payload: result.data });
}
