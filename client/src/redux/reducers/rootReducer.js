import { combineReducers } from "redux";

import books from "./books";
import genres from "./genres";
import book from "./getbook";

export default combineReducers({
  books,
  genres,
  book,
});
