import React from 'react';
import {useSelector} from 'react-redux';
import AuthHeader from '../auth-header/auth-header.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import {selectFavoritesList} from '../../selectors/selectors.js';
import {CatalogTitle, HeaderClass} from '../../const.js';

function MyList() {
  const films = useSelector(selectFavoritesList);
  return (
    <div className="user-page">
      <AuthHeader specialClass={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
      </AuthHeader>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">{CatalogTitle.MY_LIST}</h2>
        <FilmList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

export default MyList;
