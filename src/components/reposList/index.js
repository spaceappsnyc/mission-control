import { connect } from 'react-redux';
import Component from './component';

import * as Actions from '../../actions/repos';

export const mapStateToProps = (state) => {
  return { ...state.repos };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    fetchRepos: () => dispatch(Actions.requestRepos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
