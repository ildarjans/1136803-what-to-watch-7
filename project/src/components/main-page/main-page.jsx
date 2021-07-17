import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import FilmCard from '../film-card/film-card.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import {CatalogTitle, DisplayCards} from '../../const.js';
import {selectFilmsByGenre} from '../../selectors/selectors.js';

function MainPage() {
  const [filmsContainerSize, expandFilmsContainerSize] = useState(DisplayCards.MAIN_PAGE);
  const films = useSelector(selectFilmsByGenre);
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
          <FilmList films={films.slice(0, filmsContainerSize)}/>
          {
            films.length > filmsContainerSize &&
            <div className="catalog__more">
              <button
                className="catalog__button"
                type="button"
                onClick={() => expandFilmsContainerSize(filmsContainerSize + DisplayCards.MAIN_PAGE)}
              >
                Show more
              </button>
            </div>
          }
        </section>
        <Footer/>
      </div>
    </>
  );
}

export default MainPage;
