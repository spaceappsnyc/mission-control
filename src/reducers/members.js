import * as Consts from '../constants/members';

export const initialState = {
  items: [],
  isFetching: false,
  didInvalidate: true,
  error: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Consts.REQUEST_MEMBERS:
      return {
        ...state,
        isFetching: true
      };
    case Consts.RECEIVE_MEMBERS:
      return {
        ...state,
        items: action.members,
        isFetching: false,
        didInvalidate: false,
        error: ''
      };
    case Consts.REJECT_MEMBERS:
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
