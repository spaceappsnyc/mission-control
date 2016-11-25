import * as URL from './url';

import { headers } from './utils';

export function fetchRepos() {
  return fetch(`${URL.orgRepos('spaceappsnyc')}?type=member`, { headers })
    .then(response => {
      if (!response.ok) throw new Error(response.message);
      return response;
    })
    .then(response => response.json());
}
