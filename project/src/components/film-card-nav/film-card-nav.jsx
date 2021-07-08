import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import FilmCardOverview from '../film-card-overview/film-card-overview.jsx';
import FilmCardDetails from '../film-card-details/film-card-details.jsx';
import FilmCardReview from '../film-card-review/film-card-review.jsx';
import {filmPropTypes} from '../../prop-types/films.js';


const ACTIVE_CLASSNAME = 'film-nav__item--active';

export const FilmCardTabName = {
  OVERVIEW: 'OVERVIEW',
  DETAILS: 'DETAILS',
  REVIEWS: 'REVIEWS',
};

function FilmCardNav({film}) {
  const [activeTab, setActiveTab] = useState(FilmCardTabName.OVERVIEW);
  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === FilmCardTabName.OVERVIEW && ACTIVE_CLASSNAME}`}>
            <Link
              to={'#'}
              className="film-nav__link"
              onClick={() => setActiveTab(FilmCardTabName.OVERVIEW)}
            >
              Overview
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === FilmCardTabName.DETAILS && ACTIVE_CLASSNAME}`}>
            <Link
              to={'#'}
              className="film-nav__link"
              onClick={() => setActiveTab(FilmCardTabName.DETAILS)}
            >
              Details
            </Link>
          </li>
          <li className={`film-nav__item ${activeTab === FilmCardTabName.REVIEWS && ACTIVE_CLASSNAME}`}>
            <Link
              to={'#'}
              className="film-nav__link"
              onClick={() => setActiveTab(FilmCardTabName.REVIEWS)}
            >
              Reviews
            </Link>
          </li>
        </ul>
      </nav>

      {activeTab === FilmCardTabName.OVERVIEW && <FilmCardOverview film={film}/>}
      {activeTab === FilmCardTabName.DETAILS && <FilmCardDetails film={film}/>}
      {activeTab === FilmCardTabName.REVIEWS && <FilmCardReview/>}

    </>
  );
}

FilmCardNav.propTypes = {
  film: PropTypes.shape(filmPropTypes).isRequired,
};

export default FilmCardNav;
