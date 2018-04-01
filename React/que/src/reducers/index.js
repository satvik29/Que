import {combineReducers} from 'redux';
import groupReducers from './groupReducers';
import playerReducers from './playerReducers';

const rootReducer = combineReducers({
	group: groupReducers,
	player: playerReducers,
});

export default rootReducer;
