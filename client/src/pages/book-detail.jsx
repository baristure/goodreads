import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { fetchBookById } from "../redux/actions/getbook";

import BookDetail from "../components/bookdetail/BookDetail";

class BookDetailPage extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const bookId = this.props.match.params.bookId;

    this.props.fetchBookById(bookId);
  }

  render() {
    return (
      <div>
        <BookDetail book={this.props.book} />
      </div>
    );
  }
}

const mapStateToProps = ({ book }) => {
  return {
    book,
  };
};

const mapDispatchToProps = {
  fetchBookById,
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(BookDetailPage)
);
