import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { fetchGenres } from "../../redux/actions/genres";
import GenreList from "../genrelist/GenreList";

class Genre extends Component {
  static propTypes = {
    genres: PropTypes.object.isRequired,
  };
  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    return (
      <div>
        <GenreList genres={this.props.genres} />
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
