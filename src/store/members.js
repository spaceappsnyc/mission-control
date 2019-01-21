import { all, takeLatest, put, call } from "redux-saga/effects";
import { fetch } from "../api";

export const REQUEST_MEMBERS = "REQUEST_MEMBERS";
export const RECEIVE_MEMBERS = "RECEIVE_MEMBERS";
export const REJECT_MEMBERS = "REJECT_MEMBERS";

export const requestMembers = () => ({ type: REQUEST_MEMBERS });
export const receiveMembers = members => ({ type: RECEIVE_MEMBERS, members });
export const rejectMembers = error => ({ type: REJECT_MEMBERS, error });

const MEMBERS_URL = `${
  process.env.REACT_APP_GITHUB_URL
}/orgs/spaceappsnyc/members?per_page=100`;

export function* getMembers(action) {
  try {
    const members = yield call(fetch, MEMBERS_URL);
    yield put(receiveMembers(members));
  } catch (error) {
    yield put(rejectMembers(error.message));
  }
}

export function* saga() {
  yield all([takeLatest(REQUEST_MEMBERS, getMembers)]);
}

export const initialState = {
  items: [],
  isFetching: false,
  didInvalidate: true,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_MEMBERS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_MEMBERS:
      return {
        ...state,
        items: action.members,
        isFetching: false,
        didInvalidate: false,
        error: ""
      };
    case REJECT_MEMBERS:
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
