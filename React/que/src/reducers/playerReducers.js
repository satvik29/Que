import {Map} from 'immutable';

import * as actions from '../constants/actionTypes';
import PlayerRecord from '../records/PlayerRecord';

const playerReducer = (state = PlayerRecord(), action) => {
	switch (action.type) {
		case actions.QUEUE_FETCH_FULFILLED: {
			return state.merge({
				queue: Map(action.payload.data),
			});
		}

		case actions.REMOVE_QUEUE_ITEM: {
			console.log(state.toJS())
			console.log(action.payload)
			return state.merge({
				queue: state.queue.delete(action.payload)
			});
		}
		default: {
			return state;
		}
	}
}

export default playerReducer;
