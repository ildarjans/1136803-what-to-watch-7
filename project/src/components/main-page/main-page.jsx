import React from 'react';
import {connect} from 'react-redux';
import FilmCard from '../film-card/film-card.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import CatalogMoreBtn from '../catalog-more-btn/catalog-more-btn.jsx';
import {filmsPropTypes} from '../../prop-types/films.js';
import {CatalogTitle} from '../../const.js';

function MainPage({films}) {
  const {
    title,
    genre,
    year,
    posterImage,
    backgroundImage,
  } = films[0];
  return (
    <>
      <FilmCard
        title={title}
        genre={genre}
        year={year}
        posterImage={posterImage}
        backgroundImage={backgroundImage}
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">{CatalogTitle.CATALOG}</h2>
          <GenreList/>
          <FilmList films={films}/>
          <CatalogMoreBtn/>
        </section>
        <Footer/>
      </div>
    </>
  );
}

MainPage.propTypes = {
  films: filmsPropTypes.isRequired,
};

const mapStateToProps = (state) => ({
  films: state.filmsByGenre[state.genre],
});

export default connect(mapStateToProps)(MainPage);
