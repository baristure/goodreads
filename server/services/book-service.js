import BaseService from "./base-service";
import BookModel from "../models/book.model";

class BookService extends BaseService {
  model = BookModel;
}

module.exports = new BookService();
