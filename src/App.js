import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './containers/HomePage';
import SearchPage from './containers/SearchPage';
import './App.css'

class BooksApp extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route path="/search">
                            <SearchPage/>
                        </Route>
                        <Route path="/">
                            <HomePage/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default BooksApp
