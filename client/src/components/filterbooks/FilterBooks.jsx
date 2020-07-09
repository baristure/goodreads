import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchBooksbyGenres } from "../../redux/actions/books";
import BookList from "../booklist/Booklist";

class FilterBooks extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired,
  };
  componentDidMount(genreId) {
    this.props.fetchBooksbyGenres(genreId);
  }
  render() {
    return (
      <div>
        <BookList books={this.props.books} />
      </div>
    );
  }
}

const mapStateToProps = ({ books }) => {
  return {
    books,
  };
};

const mapDispatchToProps = {
  fetchBooksbyGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBooks);
