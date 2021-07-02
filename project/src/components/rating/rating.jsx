import React from 'react';

import {funcPropTypes, numberPropTypes} from '../../prop-types/common.js';

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
  rating: numberPropTypes.isRequired,
  onRatingChange: funcPropTypes.isRequired,
};

export default Rating;
