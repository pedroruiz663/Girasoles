
import { createStore } from 'redux';
import KinderReducer, { INITIAL_STATE } from './reducers';

const store = createStore(KinderReducer, INITIAL_STATE);

export default store;