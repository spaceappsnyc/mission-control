import * as Consts from '../constants/repos';

export const requestRepos = () => ({ type: Consts.REQUEST_REPOS });
export const receiveRepos = (repos) => ({ type: Consts.RECEIVE_REPOS, repos });
export const rejectRepos = (error) => ({ type: Consts.REJECT_REPOS, error });
