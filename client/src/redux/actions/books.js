import { API_BASE } from "../../config/env";
import axios from "axios";

export const FETCH_BOOKS_FULFILLED = "FETCH_BOOKS_FULFILLED";
export const FETCH_BOOKS_REJECTED = "FETCH_BOOKS_REJECTED";
export const FETCH_BOOKS_PENDİNG = "FETCH_BOOKS_PENDİNG";
export const FETCH_BOOKSBYGENRES_FULFILLED = "FETCH_BOOKSBYGENRES_FULFILLED";
export const FETCH_BOOKSBYGENRES_REJECTED = "FETCH_BOOKSBYGENRES_REJECTED";
export const FETCH_BOOKSBYGENRES_PENDİNG = "FETCH_BOOKSBYGENRES_PENDİNG";

export const fetchBooks=(query)=> async dispatch=>{
  try {
    let books = await axios.get(
      `${API_BASE}/books/?page=${query.page}&limit=${query.limit}`
    );
    dispatch({ type: "FETCH_BOOKS", payload: books.data });
  } catch (error) {
    dispatch({ type: "GET_ERRORS", payload: error });
  }
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
