import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthHeader from '../auth-header/auth-header.jsx';
import Breadcrumbs from '../breadcrumbs/breadcrumbs.jsx';
import ReviewForm from '../review-form/review-form.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import {selectFilmById, selectPostReviewErrorMessage} from '../../selectors/selectors.js';
import {filmPropTypes} from '../../prop-types/films.js';
import {postReview} from '../../middleware/thunk-api.js';

function AddReviewPage({film, id, onPostReview, postErrorMessage}) {
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

      <ReviewForm id={id} onSubmitReviewForm={onPostReview} postErrorMessage={postErrorMessage}/>

    </section>
  );
}

AddReviewPage.propTypes = {
  id: filmPropTypes.id.isRequired,
  film: PropTypes.shape(filmPropTypes).isRequired,
  onPostReview: PropTypes.func.isRequired,
  postErrorMessage: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  film: selectFilmById(state, ownProps.id),
  id: ownProps.id,
  postErrorMessage: selectPostReviewErrorMessage(state),
});

const mapDispatchToProps = (dispatch) => ({
  onPostReview(id, review) {
    dispatch(postReview(id, review));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddReviewPage));
