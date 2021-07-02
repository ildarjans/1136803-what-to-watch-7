import React from 'react';
import {connect} from 'react-redux';
import HeaderWithAuthBlock from '../header-with-auth-block/header-with-auth-block.jsx';
import Footer from '../footer/footer.jsx';
import FilmList from '../film-list/film-list.jsx';
import {selectFavoriteList} from '../../selectors/selectors.js';
import {CatalogTitle, HeaderClass} from '../../const.js';
import {filmsPropTypes} from '../../prop-types/films.js';

function MyList({films}) {
  return (
    <div className="user-page">
      <HeaderWithAuthBlock specialClass={HeaderClass.USER_PAGE}>
        <h1 className="page-title user-page__title">My list</h1>
      </HeaderWithAuthBlock>

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

const mapStateToProps = (state) => ({
  films: selectFavoriteList(state),
});

export default connect(mapStateToProps)(MyList);
