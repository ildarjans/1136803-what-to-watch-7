import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropTypes} from '../../prop-types/reviews.js';

const monthNames = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December',
];

const getReviewDateString = (dateStr) => {
  const dateObj = new Date(dateStr);
  const month = monthNames[dateObj.getMonth()];
  const date = dateObj.getDate() > 9 ? dateObj.getDate() : `0${dateObj.getDate()}`;
  const year = dateObj.getFullYear();
  return `${month} ${date}, ${year}`;
};

function FilmReview({review}) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time className="review__date" dateTime="2015-11-18">{getReviewDateString(review.date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

FilmReview.propTypes = {
  review: PropTypes.shape(reviewPropTypes).isRequired,
};

export default FilmReview;

