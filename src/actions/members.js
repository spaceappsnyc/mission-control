import * as Consts from '../constants/members';

export const requestMembers = () => ({ type: Consts.REQUEST_MEMBERS });
export const receiveMembers = (members) => ({ type: Consts.RECEIVE_MEMBERS, members });
export const rejectMembers = (error) => ({ type: Consts.REJECT_MEMBERS, error });
