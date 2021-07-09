import axios from "axios";
import { call, put, take, fork } from "redux-saga/effects";

import entriesTypes, {
  populateEntries,
  populateEntryDetail,
} from "../actions/entries.actions";

export function* getAllEntries() {
  // "take" wait for a action type and continue execution
  yield take(entriesTypes.GET_ENTRIES);
  const { data } = yield call(axios, "http://localhost:3002/entries");
  // "put" is like dispatch method
  yield put(populateEntries(data));
}

export function* getEntryDetails(id) {
  // "call" is used to do call generator or async functions, wait for the response and continue
  const { data } = yield call(axios, `http://localhost:3002/values/${id}`);
  console.log(data);
  yield put(populateEntryDetail(id, data));
}

export function* getAllEntriesDetails() {
  const { payload } = yield take(entriesTypes.POPULATE_ENTRIES);
  for (let index = 0; index < payload.length; index++) {
    const entry = payload[index];
    // "fork" is used to do parallel execution
    yield fork(getEntryDetails, entry.id);
  }
}
