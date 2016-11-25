import { combineReducers } from 'redux';

import * as Consts from '../constants/auth';
import { getToken } from '../store/auth';

export const clientId = (state = 'd4fb9d5600925b740eb5', action) => {
  return state;
};

export const token = (state = getToken(), action) => {
  switch (action.type) {
    case Consts.SAVE_AUTH_TOKEN:
      return action.token;
    case Consts.CLEAR_AUTH_TOKEN:
      return null;
    default:
      return state;
  }
}

export default combineReducers({ clientId, token });
