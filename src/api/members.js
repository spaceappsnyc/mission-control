import * as URL from './url';

import { headers } from './utils';

export function fetchMembers() {
  return fetch(`${URL.orgMembers()}?per_page=100`, { headers })
    .then(response => {
      if (!response.ok) throw new Error(response.message);
      return response;
    })
    .then(response => response.json());
}
