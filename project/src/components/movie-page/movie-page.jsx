import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import NotFoundPage from '../not-found-page/not-found-page.jsx';
import FilmCardFull from '../film-card-full/film-card-full.jsx';
import Spinner from '../spinner/spinner.jsx';
import {fetchSimilarFilms} from '../../middleware/thunk-api.js';
import {
  selectAuthorizationStatus,
  selectFilmById,
  selectFilmResponseStatus,
  selectSimilarFilms
} from '../../selectors/selectors.js';
import {getFilmsMoreLikeThis} from '../../utils.js';
import {CatalogTitle} from '../../const.js';


function MoviePage() {
  const {id} = useParams();
  const authorizationStatus = useSelector(selectAuthorizationStatus);
  const film = useSelector((state) => selectFilmById(state, id));
  const similarFilms = useSelector(selectSimilarFilms);
  const isLoadingFilm = useSelector(selectFilmResponseStatus);
  const dispatch = useDispatch();
  const fetchSimilarFilmsById = (filmId) => dispatch(fetchSimilarFilms(filmId));

  useEffect(() => {
    fetchSimilarFilmsById(id);
  }, [id]);


  if (!isLoadingFilm && !film) {
    return <NotFoundPage/>;
  }

  return (
    <>
      {isLoadingFilm && <Spinner/>}
      {
        !isLoadingFilm &&
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
      }
    </>
  );
}

export default MoviePage;
