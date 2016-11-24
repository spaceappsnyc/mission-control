import * as Consts from '../constants/auth';

export const saveAuthToken = (token) => ({ type: Consts.SAVE_AUTH_TOKEN, token });
export const clearAuthToken = () => ({ type: Consts.CLEAR_AUTH_TOKEN });
