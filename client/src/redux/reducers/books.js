import {
  FETCH_BOOKS_PENDİNG,
  FETCH_BOOKS_FULFILLED,
  FETCH_BOOKS_REJECTED,
  FETCH_BOOKSBYGENRES_PENDİNG,
  FETCH_BOOKSBYGENRES_FULFILLED,
  FETCH_BOOKSBYGENRES_REJECTED,
  FETCH_BOOK_PENDİNG,
  FETCH_BOOK_FULFILLED,
  FETCH_BOOK_REJECTED,
} from "../actions/books";

const initialState = {
  fetching: false,
  bookList: [],
  book:{},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS_PENDİNG:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_BOOKS_FULFILLED:
      return {
        ...state,
        bookList: action.payload,
        fetching: false,
      };
    case FETCH_BOOKS_REJECTED:
      return {
        ...state,
        error: action.payload,
        fetching: false,
      };
    // case FETCH_BOOKSBYGENRES_PENDİNG:
    //   return {
    //     ...state,
    //     fetching: true,
    //   };
    // case FETCH_BOOKSBYGENRES_FULFILLED:
    //   return {
    //     ...state,
    //     bookList: action.payload,
    //     fetching: false,
    //   };
    // case FETCH_BOOKSBYGENRES_REJECTED:
    //   return {
    //     ...state,
    //     error: action.payload,
    //     fetching: false,
    //   };
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
