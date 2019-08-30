import  {combineReducers}  from 'redux';

import general from './reducers/general';
import auth from './reducers/auth';

export const reducers = combineReducers({general, auth});