import { combineReducers } from 'redux';

/** Import dos reducers */
import main from './main';
import menu from './menu';
import jobs from './jobs';

/** Reducers ativos */
const reducers = { main, menu, jobs }

export default combineReducers(reducers);