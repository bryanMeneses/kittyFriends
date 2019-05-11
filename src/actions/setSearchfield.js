import { SEARCH_FIELD } from "./types";

export const setSearchfield = text => {
    return {
        type: SEARCH_FIELD,
        payload: text
    }
}