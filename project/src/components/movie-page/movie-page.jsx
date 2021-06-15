import React from 'react';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import FilmCardFull from '../film-card-full/film-card-full.js';
import {DisplayCards, CatalogTitle} from '../../const.js';
import {filmPropertyTypes, filmsPropTypes} from '../../prop-types/films.js';

function MoviePage({films, id}) {
  const film = films.find((filmItem) => filmItem.id === id);

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
  id: filmPropertyTypes.id.isRequired,
  films: filmsPropTypes.isRequired,
};

export default MoviePage;
