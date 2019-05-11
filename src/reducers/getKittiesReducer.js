import { GET_KITTIES, SEARCH_FIELD } from '../actions/types'


const intialState = {
    kittyContacts: [],
    kittySearchfield: ''
}

export default function (state = intialState, action) {
    switch (action.type) {
        case GET_KITTIES:
            return {
                ...state,
                kittyContacts: action.payload
            };
        case SEARCH_FIELD:
            return {
                ...state,
                kittySearchfield: action.payload,
            }
        default:
            return state;
    }
}
