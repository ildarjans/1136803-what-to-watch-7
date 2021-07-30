import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import AuthHeader from '../auth-header/auth-header.jsx';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {selectFilmById, selectPostReviewErrorMessage} from '../../selectors/selectors.js';
import {addReview} from '../../middleware/thunk-api.js';

function AddReviewPage() {
  const {id} = useParams();
  const film = useSelector((state) => selectFilmById(state, id));
  const addReviewErrorMessage = useSelector(selectPostReviewErrorMessage);
  const dispatch = useDispatch();
  const handleReviewFormSubmit = (filmId, review) => {
    dispatch(addReview(filmId, review));
  };

  if (!film) {
    return <NotFoundPage/>;
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <AuthHeader>
          <Breadcrumbs id={id} title={film.title}/>
        </AuthHeader>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.title}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm id={id} onSubmit={handleReviewFormSubmit} errorMessage={addReviewErrorMessage}/>

    </section>
  );
}

export default AddReviewPage;
