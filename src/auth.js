import store from './store';
import { saveAuthToken, clearAuthToken } from './actions/auth';

export const getToken = () => localStorage.getItem('token');
export const setToken = (token) => localStorage.setItem('token', token);
export const clearToken = () => localStorage.removeItem('token');
export const isAuthenticated = () => !!getToken();

export const checkAuth = (nextState, replace) => {
  const token = nextState.location.query['access_token'];
  if (token) {
    setToken(token);
    store.dispatch(saveAuthToken(token));
    replace('/');
  }
};

export const logout = (nextState, replace) => {
  clearToken();
  store.dispatch(clearAuthToken());
  replace('/');
};
