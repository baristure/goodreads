import React from "react";


// import { Row, Col, Image, Card, Button } from "react-bootstrap";

const BookDetail = ({ book }) => {
  // const {bookId}=useParams();
  const emptyMessage = <p>Book data can not found :(</p>;
  console.log(book.book.title);
  const bookView = <div>Kitap Id ={book.book.title}</div>;

  return <div>{bookView ? bookView : emptyMessage}</div>;
};

// BookDetail.propTypes = {
//   books: PropTypes.shape({
//     bookList: PropTypes.array.isRequired,
//   }).isRequired,
// };

export default BookDetail;
