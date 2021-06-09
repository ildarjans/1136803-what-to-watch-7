import React from 'react';
import PropTypes from 'prop-types';
import Catalog from '../catalog/catalog.jsx';
import FilmCard from '../film-card/film-card.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import Footer from '../footer/footer.jsx';
import {getCardKeys} from '../../mock-utils.js';
import {AMOUNT_MAIN_PAGE_CARDS, CatalogTitle} from '../../consts.js';

const keyList = getCardKeys(AMOUNT_MAIN_PAGE_CARDS);

function MainPage({title, genre, year}) {
  return (
    <>
      <FilmCard title={title} genre={genre} year={year}/>

      <div className="page-content">

        <Catalog title={CatalogTitle.CATALOG} films={keyList}>
          <GenreList/>
        </Catalog>

        <Footer/>

      </div>
    </>
  );
}

MainPage.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MainPage;
