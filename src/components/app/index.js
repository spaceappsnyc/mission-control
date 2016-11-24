import { connect } from 'react-redux';
import Component from './component';
import { push } from 'react-router-redux';

// import * as AuthActions from '../../actions/auth';

export const mapStateToProps = (state) => {
  return { ...state.auth };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(push('/logout'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
