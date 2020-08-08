import {
  FETCH_BOOK_PENDİNG,
  FETCH_BOOK_FULFILLED,
  FETCH_BOOK_REJECTED,
} from "../actions/getbook";

const initialState = {
  fetching: false,
  book: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOK_PENDİNG:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_BOOK_FULFILLED:
      return {
        ...state,
        book: action.payload,
        fetching: false,
      };
    case FETCH_BOOK_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
};
