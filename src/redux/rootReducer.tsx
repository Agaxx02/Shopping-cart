import { combineReducers } from 'redux';

import shopReducer from './shopping/shopping-reducers';

const rootReducer = combineReducers({ shopReducer });

export default rootReducer;
