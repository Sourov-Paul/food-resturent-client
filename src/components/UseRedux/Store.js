 import {createStore,combineReducers}from "redux";
import foodReducer from './Reducers/Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer=combineReducers({
    food:foodReducer
    
})
 const store =createStore(rootReducer,composeWithDevTools())

 export default store;