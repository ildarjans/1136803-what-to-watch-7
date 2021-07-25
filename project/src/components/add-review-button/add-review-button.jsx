import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.js';
import {filmPropTypes} from '../../prop-types/films.js';

function AddReviewButton({id}) {
  const reviewRoute = AppRoute.REVIEW.replace(':id', id);
  return (
    <Link to={reviewRoute} className="btn film-card__button">Add review</Link>
  );
}

AddReviewButton.propTypes = {
  id: filmPropTypes.id.isRequired,
};

export default AddReviewButton;
