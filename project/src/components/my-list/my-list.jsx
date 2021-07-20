import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AuthHeader from '../auth-header/auth-header.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import Spinner from '../spinner/spinner.jsx';
import {selectFavoritesList, selectFavoritesResponseStatus} from '../../selectors/selectors.js';
import {CatalogTitle, HeaderClass} from '../../const.js';
import {fetchFavorites} from '../../middleware/thunk-api.js';

function MyList() {
  const films = useSelector(selectFavoritesList);
  const isLoadingFavorites = useSelector(selectFavoritesResponseStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  return (
    <div className="user-page">
      <AuthHeader className={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
      </AuthHeader>

      {isLoadingFavorites && <Spinner/>}
      {!isLoadingFavorites &&
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">{CatalogTitle.MY_LIST}</h2>
        <FilmList films={films}/>
      </section>}
      <Footer/>
    </div>
  );
}

export default MyList;
