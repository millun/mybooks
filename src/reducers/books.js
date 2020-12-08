import {SET_BOOKS, ADD_FOUND_BOOK} from '../actions/books'

const books = (state = [], action) => {
    switch (action.type) {
        case SET_BOOKS:
            return action.payload;

        case ADD_FOUND_BOOK:
            return [...state, action.payload]

        default:
            return state
    }
}

export default books