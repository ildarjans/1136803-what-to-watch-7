import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import FilmReview from '../film-review/film-review.jsx';
import {fetchReviews} from '../../middleware/thunk-api.js';
import {selectReviews} from '../../selectors/selectors.js';
import {chunkArray} from '../../utils.js';


const COLUMNS_COUNT = 2;

function FilmCardReviews({id}) {
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();
  const fetchFilmReviews = (filmId) => dispatch(fetchReviews(filmId));

  useEffect(() => fetchFilmReviews(id), [id]);
  const [firstColumn, secondColumn] = chunkArray([...reviews], COLUMNS_COUNT);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col" data-testid={'column-1'}>
        {firstColumn && firstColumn.map((review) => <FilmReview key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col" data-testid={'column-2'}>
        {secondColumn && secondColumn.map((review) => <FilmReview key={review.id} review={review}/>)}
      </div>
    </div>
  );
}

FilmCardReviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FilmCardReviews;
