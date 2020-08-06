import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
const BookDetail = ({ bookId }) => {

  const emptyMessage = <p>Book data can not found :(</p>;
  const book = <div>{bookId}</div>;

  return <div>{book ? book : emptyMessage}</div>;
};

// BookDetail.propTypes = {
//   books: PropTypes.shape({
//     bookList: PropTypes.array.isRequired,
//   }).isRequired,
// };

export default BookDetail;
