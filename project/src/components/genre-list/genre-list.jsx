import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import Genre from '../genre/genre.jsx';
import {ActionCreator} from '../../store/action.js';
import {selectAllGenres, selectCurrentGenre} from '../../selectors/selectors.js';
import {availableGenresPropTypes} from '../../prop-types/process.js';


function GenreList({genres, activeGenre, onChangeGenre}) {
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <Genre
          key={genre}
          genre={genre}
          isActive={activeGenre === genre}
          onGenreClick={onChangeGenre}
        />
      ))}
    </ul>
  );
}

GenreList.propTypes = {
  genres: availableGenresPropTypes.isRequired,
  activeGenre: PropTypes.string.isRequired,
  onChangeGenre: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genres: selectAllGenres(state),
  activeGenre: selectCurrentGenre(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChangeGenre: (genre) => {
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
