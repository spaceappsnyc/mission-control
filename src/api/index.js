import unfetch from "unfetch";

export const getToken = () => localStorage.getItem("token");
export const setToken = token => localStorage.setItem("token", token);
export const clearToken = () => localStorage.removeItem("token");
export const isAuthenticated = () => !!getToken();

export const headers = () => ({ Authorization: `token ${getToken()}` });
export const setHeaderToken = token =>
  Object.assign(headers(), { Authorization: `token ${token}` });

export const fetch = (url, headerOptions = {}) =>
  unfetch(url, { ...headers, ...headerOptions })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.message);
      }
      return response;
    })
    .then(response => response.json());
