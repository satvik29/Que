import * as actions from '../constants/actionTypes'

import axios from 'axios';

export const fetchQueue = (groupId) => {
	return {
		type: actions.QUEUE_FETCH,
		payload: axios.get(`https://que-la-hacks.firebaseio.com/${groupId}.json`)
	};
};

export const removeQueueItem = (id) => {
	return {
		type: actions.REMOVE_QUEUE_ITEM,
		payload: id,
	};
};

export const popQueue = (group, id) => {
	return {
		type: actions.POP_QUEUE_FETCH,
		payload: axios.post(`https://us-central1-que-la-hacks.cloudfunctions.net/pop_queue`, {
			group,
			queue_id: id,
		},
			{
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					'Access-Control-Allow-Origin': '*',
				},
				crossdomain: true,
			}),
	};
};
