import { connect } from 'react-redux';
import Component from './component';

import * as Actions from '../../actions/members';

export const mapStateToProps = (state) => {
  return { ...state.members };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchMembers: () => dispatch(Actions.requestMembers())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
