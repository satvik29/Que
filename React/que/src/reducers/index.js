import {combineReducers} from 'redux';
import groupReducers from './groupReducers';

const rootReducer = combineReducers({
	group: groupReducers,
});

export default rootReducer;
