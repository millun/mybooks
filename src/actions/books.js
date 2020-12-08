import * as BooksAPI from '../BooksAPI'
export const SET_BOOKS = 'SET_BOOKS'
export const SET_SEARCHES = 'SET_SEARCHES'
export const SET_SHELVES = 'SET_SHELVES'
export const ADD_FOUND_BOOK = 'ADD_FOUND_BOOK'

const setBooks = (books) => ({
    type: SET_BOOKS,
    payload: books,
})

const setSearches = (books) => ({
    type: SET_SEARCHES,
    payload: books,
})

const setShelves = (shelves) => ({
    type: SET_SHELVES,
    payload: shelves,
})

const addFoundBook = (book) => ({
    type: ADD_FOUND_BOOK,
    payload: book,
})

const setCategory = (book, category) => async (dispatch) => {
    const shelves = await BooksAPI.update(book, category)
    dispatch(setShelves(shelves))
}

const fetchBooks = () => async (dispatch) => {
    const books = await BooksAPI.getAll();
    await dispatch(setBooks(books))
    const shelves = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    }
    books.map(book => shelves[book.shelf].push(book.id))
    dispatch(setShelves(shelves))
}

const searchBooks = (query) => async (dispatch) => {
    if (!query || query.length === 0) {
        dispatch(setSearches([]));
    }
    try {
        const books = await BooksAPI.search(query);
        if (books.error) {
            throw new Error("error occurred")
        }
        dispatch(setSearches(books))
    } catch (err) {
        dispatch(setSearches([]))
    }
}

export {setBooks, fetchBooks, searchBooks, addFoundBook}
export {setCategory}