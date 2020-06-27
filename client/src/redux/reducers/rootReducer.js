import {combineReducers} from 'redux';


import books from './books'
import genres from './genres'

export default combineReducers({
    books,genres
})