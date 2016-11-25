import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Consts from '../constants/members';
import * as API from '../api/members';
import * as Actions from '../actions/members';

export function* fetchMembers(action) {
  try {
    const members = yield call(API.fetchMembers, action);
    yield put(Actions.receiveMembers(members));
  } catch (error) {
    yield put(Actions.rejectMembers(error.message));
  };
}

export default function* watchMembers() {
  yield [
    takeLatest(Consts.REQUEST_MEMBERS, fetchMembers)
  ];
}
