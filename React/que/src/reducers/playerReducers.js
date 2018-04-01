import {Map} from 'immutable';

import * as actions from '../constants/actionTypes';
import PlayerRecord from '../records/PlayerRecord';

const playerReducer = (state = PlayerRecord(), action) => {
	switch (action.type) {
		case actions.QUEUE_FETCH_FULFILLED: {
			console.log(action.payload)
			return state.merge({
				queue: Map(action.payload.data),
			});
		}

		default: {
			return state;
		}
	}
}

export default playerReducer;
