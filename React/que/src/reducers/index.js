import {combineReducers} from 'redux';
import groupReducers from './groupReducers';
import playerReducers from './playerReducers';
import youtubeReducers from './youtubeReducers';

const rootReducer = combineReducers({
	group: groupReducers,
	player: playerReducers,
	youtube: youtubeReducers
});

export default rootReducer;
