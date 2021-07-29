import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FilmCard from '../film-card/film-card.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import {selectFilmResponseStatus, selectFilmsByGenre, selectPromoFilm} from '../../selectors/selectors.js';
import {fetchPromoFilm} from '../../middleware/thunk-api.js';
import Spinner from '../spinner/spinner.jsx';
import {CatalogTitle, DisplayCards} from '../../const.js';

function MainPage() {
  const [filmsContainerSize, expandFilmsContainerSize] = useState(DisplayCards.MAIN_PAGE);
  const films = useSelector(selectFilmsByGenre);
  const promoFilm = useSelector(selectPromoFilm);
  const isLoadingFilm = useSelector(selectFilmResponseStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromoFilm());
  }, []);

  return (
    <>
      {isLoadingFilm && <Spinner/>} :

      {!isLoadingFilm && promoFilm.id && <FilmCard film={promoFilm}/>}

      {
        !isLoadingFilm && (
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
                    data-testid={'show-more'}
                  >
                    Show more
                  </button>
                </div>
              }
            </section>
            <Footer/>
          </div>
        )
      }
    </>
  );
}

export default MainPage;
