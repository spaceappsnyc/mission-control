import * as Consts from '../constants/repos';

export const initialState = {
  items: [],
  isFetching: false,
  didInvalidate: true,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.REQUEST_REPOS:
      return {
        ...state,
        isFetching: true
      };
    case Consts.RECEIVE_REPOS:
      return {
        ...state,
        items: action.repos,
        isFetching: false,
        didInvalidate: false,
        error: ''
      };
    case Consts.REJECT_REPOS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        error: action.error
      }
    default:
      return state;
  }
};
