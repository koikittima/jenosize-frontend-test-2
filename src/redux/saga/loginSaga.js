import router, { useRouter } from 'next/router'
import { all, takeEvery, put } from "redux-saga/effects";
import * as helper from "../../utils/helper";
import * as actionTypes from "../actions/loginTypes";


export default function* watchLoginSaga() {
  yield all([
    takeEvery(actionTypes.LOG_IN, watchLogin),
    takeEvery(actionTypes.CHECK_LOGIN, watchCheckLogin),
    takeEvery(actionTypes.LOG_OUT, watchLogout),
  ]);
}

function* watchLogin(payload) {
  helper.sessionSave("login", payload.payload.user);
  if (payload.payload.token) {
    helper.sessionSave("token", payload.payload.token);
    helper.setCookie("token", `${payload.payload.token.tokenType} ${payload.payload.token.accessToken}`, null,  process.env.NEXT_PUBLIC_COOKIE_DOMAIN);
  }
  try {
    yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: payload.payload.user });
    if (payload.payload.user?.userType.id != 1) {
      window.location.href = `${process.env.NEXT_PUBLIC_CMS_WEB}/#/cms/login`;
    }
  } catch (e) {
    yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
  }
}

function* watchCheckLogin() {
  const items = yield helper.sessionGet("login");
  try {
    if (items) {
      yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: JSON.parse(items) });
    }
  } catch (e) {
    yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
  }
}

function redirectToMainPage (){
  router.push("/")
}

function* watchLogout() {
  helper.sessionRemove("login");
  helper.sessionRemove("token");
  helper.setCookie("token", "", -1,  process.env.NEXT_PUBLIC_COOKIE_DOMAIN);
  redirectToMainPage()
  try {
    yield put({ type: actionTypes.LOG_IN_SUCCESS, payload: null });
  } catch (e) {
    yield put({ type: actionTypes.LOG_IN_FAILED, payload: e });
  }
}


