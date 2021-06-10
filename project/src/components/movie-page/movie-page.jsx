import React from 'react';
import PropTypes from 'prop-types';
import FilmCard from '../film-card/film-card.jsx';
import FilmList from '../film-list/film-list.jsx';
import Footer from '../footer/footer.jsx';
import {getCardKeys} from '../../mock-utils.js';
import {AMOUNT_MORE_LIKE_THIS} from '../../consts.js';

const keyList = getCardKeys(AMOUNT_MORE_LIKE_THIS);

function MoviePage({title, genre, year}) {
  return (
    <>
      <FilmCard title={title} genre={genre} year={year}/>
      <div className="page-content">
        <FilmList films={keyList}/>
        <Footer/>
      </div>
    </>
  );
}

MoviePage.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default MoviePage;
