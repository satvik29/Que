import * as actions from '../constants/actionTypes'
import axios from 'axios';

export const fetchYoutubeVideos = (query) => {
	return {
		type: actions.YOUTUBE_FETCH,
		payload: axios.get(`https://www.googleapis.com/youtube/v3/search`, {
			part: 'player',
			q: 'cat',
		}),
		meta: {
			query,
		},
	};
};
