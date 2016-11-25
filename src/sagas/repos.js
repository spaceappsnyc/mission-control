import { takeLatest } from 'redux-saga';
import { put, call } from 'redux-saga/effects';

import * as Consts from '../constants/repos';
import * as API from '../api/repos';
import * as Actions from '../actions/repos';

export function* fetchRepos(action) {
  try {
    const repos = yield call(API.fetchRepos, action);
    yield put(Actions.receiveRepos(repos));
  } catch (error) {
    yield put(Actions.rejectRepos(error.message));
  };
}

export default function* watchRepos() {
  yield [
    takeLatest(Consts.REQUEST_REPOS, fetchRepos)
  ];
}
