import {SET_SHELVES} from '../actions/books'

const shelves = (state = {}, action) => {
    switch (action.type) {
        case SET_SHELVES:
            return action.payload;

        default:
            return state
    }
}

export default shelves