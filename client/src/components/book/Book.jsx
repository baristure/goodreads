import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchBooks } from "../../redux/actions/books";
import BookList from "../booklist/Booklist";

class Book extends Component {
  static propTypes = {
    books: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.fetchBooks();
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
  fetchBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
