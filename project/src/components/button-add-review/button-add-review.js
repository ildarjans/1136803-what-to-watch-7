import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import {filmPropertyTypes} from '../../prop-types/films.js';

function ButtonAddReview({id}) {
  const reviewRoute = AppRoute.REVIEW.replace(':id', id);
  return (
    <Link to={reviewRoute} className="btn film-card__button">Add review</Link>
  );
}

ButtonAddReview.propTypes = {
  id: filmPropertyTypes.id.isRequired,
};

export default ButtonAddReview;
