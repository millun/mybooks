import {SET_SEARCHES} from '../actions/books'

const searches = (state = [], action) => {
    switch (action.type) {
        case SET_SEARCHES:
            return action.payload;
        default:
            return state
    }
}

export default searches