import React from 'react';
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';
import UserBlock from '../user-block/user-block.jsx';
import FilmList from '../film-list/film-list.jsx';
import {CatalogTitle, HeaderClass} from '../../const.js';
import {filmsPropTypes} from '../../prop-types/films.js';

function MyList({films}) {
  return (
    <div className="user-page">
      <Header specialClass={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock/>
      </Header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">{CatalogTitle.MY_LIST}</h2>
        <FilmList films={films}/>
      </section>

      <Footer/>
    </div>
  );
}

MyList.propTypes = {
  films: filmsPropTypes.isRequired,
};

export default MyList;
