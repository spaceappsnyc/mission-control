import { all, takeLatest, put, call } from "redux-saga/effects";
import { fetch } from "../api";

export const REQUEST_REPOS = "REQUEST_REPOS";
export const RECEIVE_REPOS = "RECEIVE_REPOS";
export const REJECT_REPOS = "REJECT_REPOS";

export const requestRepos = () => ({ type: REQUEST_REPOS });
export const receiveRepos = repos => ({ type: RECEIVE_REPOS, repos });
export const rejectRepos = error => ({ type: REJECT_REPOS, error });

export const fetchRepos = () =>
  fetch(
    `${process.env.REACT_APP_GITHUB_URL}/orgs/spaceappsnyc/repos?type=member`
  );

export function* getRepos(action) {
  try {
    const repos = yield call(fetchRepos, action);
    yield put(receiveRepos(repos));
  } catch (error) {
    yield put(rejectRepos(error.message));
  }
}

export function* saga() {
  yield all([takeLatest(REQUEST_REPOS, getRepos)]);
}

export const initialState = {
  items: [],
  isFetching: false,
  didInvalidate: true,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_REPOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_REPOS:
      return {
        ...state,
        items: action.repos,
        isFetching: false,
        didInvalidate: false,
        error: ""
      };
    case REJECT_REPOS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        error: action.error
      };
    default:
      return state;
  }
};
