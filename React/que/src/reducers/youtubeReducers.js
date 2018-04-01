import { Record } from 'immutable';

import * as actions from '../constants/actionTypes';

const defaultState = Record({
	id: {
		videoId: null,
	},
})();

const youtubeReducer = (state = defaultState, action) => {
		switch (action.type) {
		case actions.YOUTUBE_FETCH_FULFILLED: {
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
