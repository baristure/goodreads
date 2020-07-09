import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

import { fetchBooksbyGenres } from "../redux/actions/books";
import FilterBooks from "../components/filterbooks/FilterBooks";
import Genre from "../components/genre/Genre";

const FilterBook = ({genreId}) => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} md={2}>
            <Genre />
          </Col>
          <Col xs={10} md={10}>
            <FilterBooks genreId={genreId}  />
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
  fetchBooksbyGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBook);
