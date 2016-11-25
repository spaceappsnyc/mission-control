import { connect } from 'react-redux';
import Component from './component';
import { push } from 'react-router-redux';

export const mapStateToProps = (state) => {
  const authUrl = process.env.NODE_ENV === 'production' ?
    `https://github.com/login/oauth/authorize?client_id=${this.props.clientId}&scopes=scopes&state=unguessable-string` :
    '//localhost:3000/?access_token=a5fac18cdcbd15c500371d115e381f0bfedd186d';
  return { ...state.auth, authUrl };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(push('/logout'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
