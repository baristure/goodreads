import React from "react";
import PropTypes from "prop-types";

import "./GenreList.styles.scss";
const GenreList = ({ genres }) => {
  const emptyMessage = <p>There are no genres yet.</p>;
  const genreList = (
    <div>
      {genres.error.response ? (
        <h3>Error retrieving data!</h3>
      ) : (
        <div>
          <p className="genre-title">GENRES</p>
          {genres.genreList.map((genre) => (
            <p className="mt-1 pt-2 genre" key={genre._id} genre={genre}>
              <a
                className="genre-link"
                id={genre._id}
                href={`/book/genre/` + genre._id}
              >
                {genre.name}
              </a>
            </p>
          ))}
        </div>
      )}
    </div>
  );

  return <div>{genres.length === 0 ? emptyMessage : genreList}</div>;
};

GenreList.propTypes = {
  genres: PropTypes.shape({
    genreList: PropTypes.array.isRequired,
  }).isRequired,
};

export default GenreList;
