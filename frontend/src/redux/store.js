import {createStore, applyMiddleware} from 'redux';
import createSagasMiddleware from 'redux-saga';

import reducers from './reducers';
import sagas from '../sagas/sagas';

const sagaMiddleware = createSagasMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;