import * as actions from '../constants/actionTypes'

import axios from 'axios';

export const fetchQueue = (groupId) => {
	return {
		type: actions.QUEUE_FETCH,
		payload: axios.get(`https://que-la-hacks.firebaseio.com/GRP.json`)
	};
};
