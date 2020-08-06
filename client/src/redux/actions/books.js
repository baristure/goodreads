import { API_BASE } from "../../config/env";
import axios from "axios";

export const FETCH_BOOKS_FULFILLED = "FETCH_BOOKS_FULFILLED";
export const FETCH_BOOKS_REJECTED = "FETCH_BOOKS_REJECTED";
export const FETCH_BOOKS_PENDİNG = "FETCH_BOOKS_PENDİNG";
export const FETCH_BOOKSBYGENRES_FULFILLED = "FETCH_BOOKSBYGENRES_FULFILLED";
export const FETCH_BOOKSBYGENRES_REJECTED = "FETCH_BOOKSBYGENRES_REJECTED";
export const FETCH_BOOKSBYGENRES_PENDİNG = "FETCH_BOOKSBYGENRES_PENDİNG";
export const FETCH_BOOK_FULFILLED = "FETCH_BOOK_FULFILLED";
export const FETCH_BOOK_REJECTED = "FETCH_BOOK_REJECTED";
export const FETCH_BOOK_PENDİNG = "FETCH_BOOK_PENDİNG";

export function fetchBooks() {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BOOKS",
      payload: axios
        .get(`${API_BASE}/books`)
        .then((result) => result.data),
    });
  };
}
export function fetchBooksbyGenres(genreId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BOOKSBYGENRES",
      payload: axios
        .get(`${API_BASE}/book/genre/${genreId}`)
        .then((result) => result.data),
    });
  };
}
export function fetchBookById(bookId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BOOKBYID",
      payload: axios
        .get(`${API_BASE}/book-detail/${bookId}`)
        .then((result) => result.data),
    });
  };
}
