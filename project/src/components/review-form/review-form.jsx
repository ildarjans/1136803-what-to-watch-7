import React from 'react';
import Rating from '../rating/rating.jsx';

const DEFAULT_RATING = 7;

function ReviewForm() {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">

        <Rating rating={DEFAULT_RATING}/>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            name="review-text"
            id="review-text"
            placeholder="Review text"
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
