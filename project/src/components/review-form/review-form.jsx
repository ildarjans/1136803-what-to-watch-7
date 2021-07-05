import React, {useState} from 'react';
import Rating from '../rating/rating.jsx';
import {filmPropTypes} from '../../prop-types/films.js';

function ReviewForm({rating}) {
  const [review, setReview] = useState();
  const [filmRating, setRating] = useState(rating);

  const handleTextareaChange = ({target}) => setReview(target.value);

  const handleRatingChange = ({target}) => setRating(Number(target.value));

  return (
    <div className="add-review">
      <form
        action="#"
        className="add-review__form"
      >

        <Rating rating={filmRating} onRatingChange={handleRatingChange}/>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
            value={review}
            onChange={handleTextareaChange}
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

ReviewForm.propTypes = {
  rating: filmPropTypes.rating.isRequired,
};

export default ReviewForm;
