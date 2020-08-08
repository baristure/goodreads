import { API_BASE } from "../../config/env";
import axios from "axios";


export const FETCH_BOOK_FULFILLED = "FETCH_BOOK_FULFILLED";
export const FETCH_BOOK_REJECTED = "FETCH_BOOK_REJECTED";
export const FETCH_BOOK_PENDİNG = "FETCH_BOOK_PENDİNG";


export function fetchBookById(bookId) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_BOOK",
      payload: axios
        .get(`${API_BASE}/books/${bookId}`)
        .then((result) => result.data),
    });
  };
}
