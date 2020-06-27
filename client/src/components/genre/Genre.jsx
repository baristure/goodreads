import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchGenres } from "../../redux/actions/genres";
import GenreList from "../genrelist/GenreList";
import { fetchBooksbyGenres } from "../../redux/actions/books";

class Genre extends Component {
  static propTypes = {
    genres: PropTypes.object.isRequired,
  };
  async componentDidMount() {
    this.props.fetchGenres();
  }
  handleGenreSelect = async (genreId) => {
    const genres = await fetchBooksbyGenres(genreId);
    this.setState({ genres });
  };

  render() {
    return (
      <div>
        <GenreList
          genres={this.props.genres}
          handleGenreSelect={this.handleGenreSelect}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ genres }) => {
  return {
    genres,
  };
};

const mapDispatchToProps = {
  fetchGenres,
};

export default connect(mapStateToProps, mapDispatchToProps)(Genre);
