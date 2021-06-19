import React from 'react';
import PropTypes from 'prop-types';

const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

function Rating({rating, onRatingChange}) {
  return (
    <div className="rating">
      <div className="rating__stars">
        {ratingStars.map((star, i) => (
          <React.Fragment key={star}>
            <input
              className="rating__input"
              id={`star-${star}`}
              type="radio"
              name="rating"
              value={star}
              onChange={onRatingChange}
              checked={star === rating}
            />
            <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  onRatingChange: PropTypes.func.isRequired,
};

export default Rating;
