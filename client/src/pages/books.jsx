import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { fetchBooks } from "../redux/actions/books";
import Book from "../components/book/Book";
import Genre from "../components/genre/Genre";

const Books = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Genre />
          </Col>
          <Col xs={10} md={10}>
            <Book />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
