import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FilmReview from '../film-review/film-review.jsx';
import {fetchReviews} from '../../middleware/thunk-api.js';
import {reviewPropTypes} from '../../prop-types/reviews.js';
import {selectReviews} from '../../selectors/selectors.js';
import {chunkArray} from '../../utils.js';


const COLUMNS_COUNT = 2;

function FilmCardReviews({id, reviews, fetchFilmReviews}) {
  useEffect(() => fetchFilmReviews(id), []);
  const [firstColumn, secondColumn] = chunkArray([...reviews], COLUMNS_COUNT);

  return reviews.length > 0 && (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {firstColumn.map((review) => <FilmReview key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {secondColumn.map((review) => <FilmReview key={review.id} review={review}/>)}
      </div>
    </div>
  );
}

FilmCardReviews.propTypes = {
  id: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape(reviewPropTypes)),
  fetchFilmReviews: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: selectReviews(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchFilmReviews(id) {
    dispatch(fetchReviews(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCardReviews);
