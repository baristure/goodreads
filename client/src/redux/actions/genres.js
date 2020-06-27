import {
    API_BASE
} from '../../config/env';
import axios from 'axios';

export const FETCH_GENRES_FULFILLED = "FETCH_GENRES_FULFILLED"
export const FETCH_GENRES_REJECTED = "FETCH_GENRES_REJECTED"
export const FETCH_GENRES_PENDİNG= "FETCH_GENRES_PENDİNG"

export function fetchGenres() {
    return dispatch => {
        dispatch({
            type: "FETCH_GENRES",
            payload: axios.get(`${API_BASE}/genre`)
                .then(result => result.data)
        })
    }
}