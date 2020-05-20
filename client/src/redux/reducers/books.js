import {
    FETCH_BOOKS_PENDİNG,
    FETCH_BOOKS_COMPLETED,
    FETCH_BOOKS_REJECTED
} from '../actions/books'

const initialState = {
    fetching: false,
    bookList : [],
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOOKS_PENDİNG:
            return {
                ...state,
                fetching: true
            }
        case FETCH_BOOKS_COMPLETED:
            return {
                ...state,
                books:action.payload,
                fetching: false
            }
        case FETCH_BOOKS_REJECTED:
            return {
                ...state,
                error:action.payload,
                fetching: false
            }
            default:
                return state;
    }
}