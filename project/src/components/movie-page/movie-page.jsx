import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import FilmCardFull from '../film-card-full/film-card-full.jsx';
import {getFilmByID, getFilmsMoreLikeThis} from '../../utils.js';
import {CatalogTitle} from '../../const.js';
import {filmPropTypes, filmsPropTypes} from '../../prop-types/films.js';
import {
  selectAuthorizationStatus,
  selectFilmIdFromRoute,
  selectFilmsByGenre,
  selectSimilarFilms
} from '../../selectors/selectors.js';
import {fetchSimilarFilms} from '../../middleware/thunk-api.js';

function MoviePage({films, id, authorizationStatus, fetchSimilarFilmsById, similarFilms}) {
  const film = getFilmByID(films, id);

  useEffect(() => {
    fetchSimilarFilmsById(id);
  }, [id]);


  if (!film) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <FilmCardFull film={film} authorizationStatus={authorizationStatus}/>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">{CatalogTitle.MORE_LIKE_THIS}</h2>
          <FilmList films={getFilmsMoreLikeThis(similarFilms, film)}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

MoviePage.propTypes = {
  id: filmPropTypes.id.isRequired,
  films: filmsPropTypes.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  similarFilms: filmsPropTypes,
  fetchSimilarFilmsById: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  films: selectFilmsByGenre(state),
  id: selectFilmIdFromRoute(ownProps),
  authorizationStatus: selectAuthorizationStatus(state),
  similarFilms: selectSimilarFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchSimilarFilmsById: (id) => dispatch(fetchSimilarFilms(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MoviePage));
