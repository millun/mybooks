import React from "react";
import {CategoryChanger} from './index';

const Book = ({book, onCategoryChange}) => {
    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                            'url("' + (book.imageLinks && book.imageLinks.thumbnail) + '")',
                    }}
                />
                <CategoryChanger book={book} onChange={onCategoryChange}/>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
    )
}

export default Book