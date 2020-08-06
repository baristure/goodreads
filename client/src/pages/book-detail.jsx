import React from "react";
import { useParams } from "react-router";

import { fetchBookById } from "../redux/actions/books";

import BookDetail from "../components/bookdetail/BookDetail";

const BookDetailPage = () => {
  const { bookId } = useParams();
  return (
    <div>
      <BookDetail bookId={bookId} />{" "}
    </div>
  );
};

export default BookDetailPage;
