import { combineReducers } from "redux";
import { all, takeLatest, put } from "redux-saga/effects";
import { parse } from "query-string";
import { LOCATION_CHANGE, push } from "connected-react-router";

// import store from "./index";
import { getToken, setToken, clearToken } from "../api";

// export const checkAuth = (nextState, replace) => {
//   const token = nextState.location.query["access_token"];
//   if (token) {
//     setToken(token);
//     setHeaderToken(token);
//     store.dispatch(saveAuthToken(token));
//     replace(nextState.location.pathname);
//   }
// };

// export const logout = (nextState, replace) => {
//   clearToken();
//   setHeaderToken("");
//   store.dispatch(clearAuthToken());
//   replace("/");
// };

export const SAVE_AUTH_TOKEN = "SAVE_AUTH_TOKEN";
export const CLEAR_AUTH_TOKEN = "CLEAR_AUTH_TOKEN";

export const saveAuthToken = token => ({ type: SAVE_AUTH_TOKEN, token });
export const clearAuthToken = () => ({ type: CLEAR_AUTH_TOKEN });

export function* navigate(action) {
  if (action.payload.location.pathname === "/logout") {
    yield put(clearAuthToken());
    yield put(push("/"));
    return clearToken();
  }
  const token = parse(action.payload.location.search)["access_token"];
  if (token) {
    yield put(saveAuthToken(token));
    yield put(push("/"));
    return setToken(token);
  }
}

export function* saga() {
  yield all([takeLatest(LOCATION_CHANGE, navigate)]);
}

export const token = (state = getToken(), action) => {
  switch (action.type) {
    case SAVE_AUTH_TOKEN:
      return action.token;
    case CLEAR_AUTH_TOKEN:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ token });
