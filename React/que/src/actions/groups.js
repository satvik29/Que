import * as actions from '../constants/actionTypes';

export const setGroupId = (groupId) => {
	return {
		types: actions.SET_GROUP_ID,
		payload: groupId,
	};
};
