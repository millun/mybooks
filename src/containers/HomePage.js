import React, {useEffect} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {useHistory} from "react-router-dom";
import {fetchBooks} from '../actions/books'
import {Shelf} from '../components'

const HomePage = ({fetchBooks}) => {
    let history = useHistory();
    useEffect(() => {
        fetchBooks();
    }, [])

    return (
        <div className="app">
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf code={"currentlyReading"}/>
                        <Shelf code={"wantToRead"}/>
                        <Shelf code={"read"}/>
                    </div>
                </div>
                <div className="open-search">
                    <button onClick={() => history.push('/search')}>Add a book</button>
                </div>
            </div>
        </div>
    )
}

HomePage.propTypes = {
    fetchBooks: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => dispatch(fetchBooks()),
})

export default connect(
    null,
    mapDispatchToProps,
)(HomePage)