import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from './reducers'

const initialState = {}

const middleWare = [thunk]

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;