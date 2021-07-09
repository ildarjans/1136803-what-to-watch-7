import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';

const TEXT_REVIEW_MIN_LENGTH = 50;
const TEXT_REVIEW_MAX_LENGTH = 400;
const RATING_MIN_VALUE = 1;
const RATING_MAX_VALUE = 10;

const FormElementName = {
  'review-text': 'comment',
  'rating': 'rating',
};

const isValidComment = ({length}) => (
  length >= TEXT_REVIEW_MIN_LENGTH && length <= TEXT_REVIEW_MAX_LENGTH
);

const isValidRating = (ratingValue) => (
  ratingValue >= RATING_MIN_VALUE && ratingValue <= RATING_MAX_VALUE
);

const setDisableAttributeForInputElements = (form, isDisable) => {
  Array.from(form.elements)
    .forEach((element) => element.disabled = element.tagName === 'INPUT' ? isDisable : element.disabled);
};

const setDisableAttributeForTextAreaElement = (element, isDisable) => {
  element.disabled = isDisable;
};


const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

const initialFormValue = {
  rating: 0,
  comment: '',
};

function ReviewForm({id, onSubmitReviewForm, postErrorMessage}) {
  const [formData, setFormData] = useState(initialFormValue);
  const formRef = useRef(null);
  const textAreaRef = useRef(null);

  const handleInputChange = ({target}) => {
    setFormData({
      ...formData, [FormElementName[target.name]]: target.value,
    });
  };

  useEffect(() => () => {
    formRef.current && setDisableAttributeForInputElements(formRef.current, false);
    textAreaRef.current && setDisableAttributeForTextAreaElement(textAreaRef.current, false);
  });

  const isValidForm = isValidRating(formData.rating) && isValidComment(formData.comment);

  return (
    <div className="add-review">
      <form
        action="#"
        ref={formRef}
        className="add-review__form"
        onSubmit={(evt) => {
          evt.preventDefault();
          setDisableAttributeForInputElements(formRef.current, true);
          setDisableAttributeForTextAreaElement(textAreaRef.current, true);
          onSubmitReviewForm(id, formData);
        }}
      >

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
                  onChange={handleInputChange}
                />
                <label className="rating__label" htmlFor={`star-${star}`}>Rating {star}</label>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="add-review__text">
          <textarea
            className="add-review__textarea"
            ref={textAreaRef}
            name="review-text"
            id="review-text"
            placeholder="Review text"
            onChange={handleInputChange}
          />
          <div className="add-review__submit">
            <button
              className="add-review__btn"
              type="submit"
              disabled={!isValidForm}
            >
              Post
            </button>
          </div>
        </div>
      </form>
      {postErrorMessage && <p>Something goes wrong, try again letter.</p>}
    </div>
  );
}

ReviewForm.propTypes = {
  id: PropTypes.string.isRequired,
  onSubmitReviewForm: PropTypes.func.isRequired,
  postErrorMessage: PropTypes.string.isRequired,
};
export default ReviewForm;
