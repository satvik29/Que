import * as actions from '../constants/actionTypes';
import GroupRecord from '../records/GroupRecord';

const groupReducer = (state = GroupRecord(), action) => {
	switch(action.type) {
		case actions.SET_GROUP_ID: {
			return state.merge({
				id: action.payload,
			});
		}
		
		default: {
			return state;
		}
	}
};

export default groupReducer;
