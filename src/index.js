import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
import {load, save} from "redux-localstorage-simple"
import App from './App'
import './index.css'
import rootReducer from './reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunk,
    save()
)(createStore)
const store = createStoreWithMiddleware(
    rootReducer,
    load(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
)
