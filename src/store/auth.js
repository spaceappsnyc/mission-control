import store from './index';
import { saveAuthToken, clearAuthToken } from '../actions/auth';
import { setHeaderToken } from '../api/utils';

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const clearToken = () => localStorage.removeItem('token');
export const isAuthenticated = () => !!getToken();

export const checkAuth = (nextState, replace) => {
  const token = nextState.location.query['access_token'];
  if (token) {
    setToken(token);
    setHeaderToken(token);
    store.dispatch(saveAuthToken(token));
    replace(nextState.location.pathname);
  }
};

export const logout = (nextState, replace) => {
  clearToken();
  setHeaderToken('');
  store.dispatch(clearAuthToken());
  replace('/');
};
