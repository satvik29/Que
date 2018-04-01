import { Record } from 'immutable';

import * as actions from '../constants/actionTypes';

const defaultState = Record({
	id: {
		videoId: null,
	},
})();

const youtubeReducer = (state = defaultState, action) => {

	console.log(action.type)
		switch (action.type) {
		case actions.YOUTUBE_FETCH_FULFILLED: {
			console.log(action.payload)
			if (action.payload != null){
				return Record(action.payload)();
			} else {
				return defaultState;
			}
		}

		default: {
			return state;
		}
	}
}

export default youtubeReducer;
