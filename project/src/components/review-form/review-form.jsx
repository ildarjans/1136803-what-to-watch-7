import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

const TEXT_REVIEW_MIN_LENGTH = 50;
const TEXT_REVIEW_MAX_LENGTH = 400;
const RATING_MIN_VALUE = 1;
const RATING_MAX_VALUE = 10;

const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const isValidComment = ({length}) => (
  length >= TEXT_REVIEW_MIN_LENGTH && length <= TEXT_REVIEW_MAX_LENGTH
);

const isValidRating = (ratingValue) => (
  ratingValue >= RATING_MIN_VALUE && ratingValue <= RATING_MAX_VALUE
);


function ReviewForm({id, onSubmit, errorMessage}) {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });
  const [posting, setPosting] = useState(false);

  useEffect(() => setPosting(false), [errorMessage]);

  const handleInputChange = ({target}) => {
    setFormData({...formData, [target.name]: target.value});
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    setPosting(true);
    onSubmit(id, formData);
  };

  const isValidForm = isValidRating(formData.rating) && isValidComment(formData.comment);

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
        onSubmit={handleFormSubmit}
      >

        <div className="rating">
          <div className="rating__stars">
            {ratingStars.map((star) => (
              <React.Fragment key={star}>
                <input
                  className="rating__input"
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={star}
                  onChange={handleInputChange}
                  disabled={posting}
                  data-testid={`rating-star-${star}`}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="comment"
            id="review-text"
            placeholder="Review text"
            onChange={handleInputChange}
            disabled={posting}
            data-testid={'comment'}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isValidForm || posting}
              data-testid={'post-button'}
            >
              Post
            </button>
          </div>
        </div>
      </form>
      {errorMessage && <p>Something goes wrong, try again later.</p>}
    </div>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
export default ReviewForm;
