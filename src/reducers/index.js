import { combineReducers } from 'redux'
import books from './books'
import searches from './searches'
import shelves from './shelves'

export default combineReducers({
    books,
    searches,
    shelves,
})