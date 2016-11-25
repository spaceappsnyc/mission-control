import { BASE_URL } from '../constants/url';

export const repos = (user) => user ? `${BASE_URL}/users/${user}/repos` : `${BASE_URL}/user/repos`;
export const orgRepos = (org = 'spaceappsnyc') => `${BASE_URL}/orgs/${org}/repos`;
export const orgMembers = (org = 'spaceappsnyc') => `${BASE_URL}/orgs/${org}/members`;
