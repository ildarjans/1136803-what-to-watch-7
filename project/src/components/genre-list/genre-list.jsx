import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Genre from '../genre/genre.jsx';
import {selectAllGenres, selectCurrentGenre} from '../../selectors/selectors.js';
import {changeGenre} from '../../store/process/process-action.js';


function GenreList() {
  const genres = useSelector(selectAllGenres);
  const activeGenre = useSelector(selectCurrentGenre);
  const dispatch = useDispatch();
  const onChangeGenre = (genre) => dispatch(changeGenre(genre));

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

export default GenreList;
