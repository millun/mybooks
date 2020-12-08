import React from "react";
import {connect} from "react-redux";

const CategoryChanger = ({book, onChange}) => {
    return (
        <div className="book-shelf-changer">
            <select onChange={onChange} value={book.shelf ? book.shelf : 'none'}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => ({
    books: state.books,
})

export default connect(
    mapStateToProps,
    null,
)(CategoryChanger)