import { combineReducers } from 'redux'
import getKittiesReducer from './getKittiesReducer'


export default combineReducers({
    kitties: getKittiesReducer,

})