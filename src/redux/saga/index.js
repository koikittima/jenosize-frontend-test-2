import { all, fork } from "redux-saga/effects";
import watchLoginSaga from "./loginSaga";

export default function* rootSaga() {
  yield all([
    fork(watchLoginSaga),
  ]);
}
