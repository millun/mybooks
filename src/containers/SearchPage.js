import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import {connect} from "react-redux";
import debounce from 'lodash.debounce';
import {searchBooks, addFoundBook, setCategory} from "../actions/books";
import {Book} from '../components'

const SearchPage = ({searches, searchBooks, addFoundBook, setCategory}) => {
    let history = useHistory();

    const search = debounce(searchBooks, 750)

    const inputChanged = (event) => {
        event.preventDefault();
        const query = event.target.value;
        search(query);
    }

    const changeCategory = book => async event => {
        event.preventDefault();
        const category = event.target.value;
        await addFoundBook(book);
        setCategory(book, category);
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <button
                    className="close-search"
                    onClick={() => history.push('/')}>
                    Close
                </button>
                <div className="search-books-input-wrapper">
                    {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms in SEARCH_TERMS.MD

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                    <input type="text" placeholder="Search by title or author" onChange={inputChanged}/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {searches && searches.map(book => {
                        return <li key={book.id}><Book book={book} onCategoryChange={changeCategory(book)}/></li>
                    })}
                </ol>
            </div>
        </div>
    )
}

SearchPage.propTypes = {
    searches: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array,
    }).isRequired).isRequired,
    searchBooks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    searches: state.searches,
})

const mapDispatchToProps = dispatch => ({
    searchBooks: (query) => dispatch(searchBooks(query)),
    addFoundBook: (book) => dispatch(addFoundBook(book)),
    setCategory: (book, category) => dispatch(setCategory(book, category)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchPage)