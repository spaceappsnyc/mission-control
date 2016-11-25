import { getToken } from '../store/auth';

export const headers = { 'Authorization': `token ${getToken()}` };
export const setHeaderToken = (token) => Object.assign(headers, { 'Authorization': `token ${token}` });
