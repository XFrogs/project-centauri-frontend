import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import buttonReducer from './reducers/buttonReducer';



const reducer = combineReducers({
    buttonReducer
});



const store = createStore(reducer, applyMiddleware(thunk));

export default store;
