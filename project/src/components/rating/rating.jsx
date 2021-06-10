import React from 'react';
import PropTypes from 'prop-types';
import {RATING_STARS} from '../../consts.js';

function Rating({rating}) {
  return (
    <div className="rating">
      <div className="rating__stars">
        {RATING_STARS.map((star) => (
          <>
            <input
              className="rating__input"
              id={`star-${star}`}
              type="radio"
              name="rating"
              value={star}
              checked={star === rating}
            />
            <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
          </>
        ))}
      </div>
    </div>
  );
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
