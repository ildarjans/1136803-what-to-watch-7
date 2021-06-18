import React from 'react';
import Header from '../header/header.jsx';
import UserBlock from '../user-block/user-block.jsx';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {filmPropertyTypes, filmPropTypes} from '../../prop-types/films.js';

function Review({film, id}) {
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
        <Header>
          <Breadcrumbs id={id} title={film.title}/>
          <UserBlock/>
        </Header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.title}
            width="218"
            height="327"
          />
        </div>
      </div>

      <ReviewForm rating={film.rating}/>

    </section>
  );
}

Review.propTypes = {
  id: filmPropertyTypes.id.isRequired,
  film: filmPropTypes.isRequired,
};

export default Review;
