import {
    API_BASE
} from '../../config/env';
import axios from 'axios';

export const FETCH_BOOKS_FULFILLED = "FETCH_BOOKS_FULFILLED"
export const FETCH_BOOKS_REJECTED = "FETCH_BOOKS_REJECTED"
export const FETCH_BOOKS_PENDİNG= "FETCH_BOOKS_PENDİNG"

export function fetchBooks() {
    return dispatch => {
        dispatch({
            type: "FETCH_BOOKS",
            payload: axios.get(`${API_BASE}/books`)
                .then(result => result.data)
        })
    }
}