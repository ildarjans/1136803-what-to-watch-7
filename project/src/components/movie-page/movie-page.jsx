import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import FilmCardFull from '../film-card-full/film-card-full.jsx';
import {getFilmByID} from '../../utils.js';
import {CatalogTitle, DisplayCards} from '../../const.js';
import {filmPropTypes, filmsPropTypes} from '../../prop-types/films.js';
import {selectFilmsByGenre, selectFilmIdFromRoute} from '../../selectors/selectors.js';

function MoviePage({films, id}) {
  const film = getFilmByID(films, id);

  if (!film) {
    return <NotFoundPage/>;
  }

  return (
    <>
      <FilmCardFull film={film}/>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">{CatalogTitle.MORE_LIKE_THIS}</h2>
          <FilmList films={films.slice(DisplayCards.MORE_LIKE_THIS)}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

MoviePage.propTypes = {
  id: filmPropTypes.id.isRequired,
  films: filmsPropTypes.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  films: selectFilmsByGenre(state),
  id: selectFilmIdFromRoute(ownProps),
});

export default connect(mapStateToProps)(withRouter(MoviePage));
