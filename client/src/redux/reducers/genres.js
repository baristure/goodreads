import {
    FETCH_GENRES_PENDİNG,
    FETCH_GENRES_FULFILLED,
    FETCH_GENRES_REJECTED
} from '../actions/genres'

const initialState = {
    fetching: false,
    genreList : [],
    error: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GENRES_PENDİNG:
            return {
                ...state,
                fetching: true
            }
        case FETCH_GENRES_FULFILLED:
            return {
                ...state,
                genreList:action.payload,
                fetching: false
            };
        case FETCH_GENRES_REJECTED:
            return {
                ...state,
                error:action.payload,
                fetching: false
            }
            default:
                return state;
    }
}