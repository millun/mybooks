import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Book} from './index'
import {setCategory} from '../actions/books'

const categoryNames = {
    'none': 'None',
    'currentlyReading': 'Currently Reading',
    'wantToRead': 'Want to Read',
    'read': 'Read',
}

const Shelf = ({code, books, shelves, setCategory}) => {

    const changeCategory = book => event => {
        event.preventDefault();
        const category = event.target.value;
        setCategory(book, category);
    }
    const shelf = shelves[code] || [];
    const filteredBooks = books.filter(book => shelf.includes(book.id));

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{categoryNames[code]}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {filteredBooks.map(book => {
                        return (
                            <li key={book.id}>
                                <Book book={book} onCategoryChange={changeCategory(book)}/>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authors: PropTypes.array.isRequired,
        shelf: PropTypes.string,
    }).isRequired).isRequired,
    code: PropTypes.string.isRequired,
    shelves: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    books: state.books,
    shelves: state.shelves,
})

const mapDispatchToProps = dispatch => ({
    setCategory: (book, category) => dispatch(setCategory(book, category)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Shelf)